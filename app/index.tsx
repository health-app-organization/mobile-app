import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";
import { RootState, useAppDispatch } from "../redux/store";
import { getDashboard } from "../redux/slices/get-dashboard";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "../components/activity-indicator";
import { View } from "react-native";
import Toast from "react-native-toast-message";

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    loading: dashboardLoading,
    error,
  } = useSelector((state: RootState) => state.dashboard);

  const [authState, setAuthState] = useState<{
    isOnboardingComplete: boolean | null;
    tokenExist: boolean | null;
  }>({
    isOnboardingComplete: null,
    tokenExist: null,
  });

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const [token, onboardingStatus] = await Promise.all([
          AsyncStorage.getItem("VerificationToken"),
          AsyncStorage.getItem("completedOnboarding"),
        ]);

        setAuthState({
          tokenExist: !!token,
          isOnboardingComplete: onboardingStatus === "Done",
        });

        if (token) {
          await dispatch(getDashboard());
        }
      } catch (error) {
        console.error("Auth state check failed:", error);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to verify authentication",
        });
      } finally {
        setIsInitialLoad(false);
      }
    };

    checkAuthState();
  }, [dispatch]);

  // Initial loading state
  if (isInitialLoad) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={64} />
      </View>
    );
  }

  // Handle error state
  if (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to load user data",
    });
    return <Redirect href="/(auth)" />;
  }

  // No token cases
  if (!authState.tokenExist) {
    return authState.isOnboardingComplete ? (
      <Redirect href="/(auth)" />
    ) : (
      <Redirect href="/(onboarding)" />
    );
  }

  // Token exists but dashboard still loading
  if (dashboardLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={64} />
      </View>
    );
  }

  // Token exists and dashboard loaded
  if (data?.role) {
    return data.role === "seeker" ? (
      <Redirect href="/(healthcare-seeker)/(home)" />
    ) : (
      <Redirect href="/(healthcare-provider)/(homeprovider)" />
    );
  }

  // Fallback - token exists but no role (shouldn't normally happen)
  Toast.show({
    type: "error",
    text1: "Error",
    text2: "User role not found",
  });
  return <Redirect href="/(auth)" />;
};

export default Home;
