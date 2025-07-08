import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";
import { ActivityIndicator } from "react-native";

const Home = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<
    boolean | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenExist, setTokenExist] = useState(false);

  // Effect to check token and onboarding status initially
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("VerificationToken");
        setTokenExist(!!token);

        // if token exists dispatch getUser details
        // if (token) {
        //   dispatch(getUserDetails());
        // }

        const status = await AsyncStorage.getItem("completedOnboarding");
        setIsOnboardingComplete(status === "Done");
      } catch (error) {
        console.error("Failed to fetch token or onboarding status", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkStatus();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!isOnboardingComplete && !tokenExist) {
    // User is neither logged in nor has completed onboarding
    // @ts-ignore
    return <Redirect href={`/(onboarding)`} />;
  }
  if (!tokenExist && isOnboardingComplete) {
    // User is logged in and has completed onboarding
    // @ts-ignore
    return <Redirect href={`/(auth)`} />;
  }

  if (tokenExist && isOnboardingComplete) {
    // User is logged in and has completed onboarding
    // @ts-ignore
    return <Redirect href={`/(healthcare-seeker)/(home)`} />;
  }

  return null;
};

export default Home;
