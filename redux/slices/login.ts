import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AxiosJSON } from "../axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "types/user/User";
import { LoginAiResponse } from "types/screens/login/login";
import { ApiErrorResponse, handleMutationError } from "utilities/ErrorHanler";
import { Utils } from "utilities/utils";
import { StackNavigation } from "types/stack";
import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation<StackNavigation>();

interface LoginState {
  loading: boolean;
  data: UserData | null;
}

const axios = AxiosJSON();
export const loginUser = createAsyncThunk(
  "auth/LoginAsync",
  async (
    { email, password }: { email: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(getLoginRequest()); // Dispatch the getLoginRequest action to indicate that a login request is being made.
      console.log(
        " Foche Login request with email:",
        email,
        "and password:",
        password
      );

      const data = (
        await axios.post(`/auth/login`, {
          email,
          password,
        })
      ).data as LoginAiResponse; // Send a POST request to the server to log in

      console.log("Health Care login response ", data);
      if (!data?.status) {
        Toast.show({
          type: "error",
          text1: data.message,
          visibilityTime: 5000,
        });
        dispatch(getLoginFailed()); // Dispatch the getLoginComplete action to indicate that the login request has completed.
        return rejectWithValue({ message: data.message }); // Reject the promise with the error message.
      } else {
        await storeUserCredentials(data);
        // navigation.navigate("health-seeker", { screen: "dashboard" });

        Toast.show({
          type: "success",
          text1: data.message,
          visibilityTime: 5000,
          position: "bottom",
        });
      }
    } catch (error) {
      console.log("Login Error", error);
      let errorMessage = "An error occurred";
      const axiosError = error as AxiosError<ApiErrorResponse>; // Cast the error to an AxiosError.
      const status = error as AxiosError<String>;
      console.log(" Login Error", status?.response);

      console.log("  Login Error Status", axiosError?.response?.status);

      handleMutationError(axiosError, " Sign in failed. Try again later.");
      console.log("Signin failed", axiosError.response);
      dispatch(getLoginFailed());
      return rejectWithValue({ message: errorMessage });
    }

    async function storeUserCredentials(data: LoginAiResponse) {
      await AsyncStorage.multiSet([
        ["email", email],
        ["VerificationToken", data.data.token ?? ""],
        ["data", JSON.stringify(data.data)],
        ["user_id", data.data.user.id ?? ""],
      ]);
      Utils.wait(2000);
      dispatch(getLoginComplete(data.data)); // Dispatch the getLoginComplete action to indicate that the login request has completed.
    }
  }
);

// Define the initial state of the login slice.
const initialState: LoginState = {
  loading: false,
  data: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginRequest: (state) => {
      state.loading = true;
    },

    getLoginComplete: (state, action) => {
      state.loading = false;
      state.data = action.payload as UserData; // Update the state with the user data received from the server.
    },

    getLoginFailed: (state) => {
      state.loading = false;
    },
  },
});

// Export the actions and the login slice.
export const { getLoginRequest, getLoginComplete, getLoginFailed } =
  loginSlice.actions;

export default loginSlice;
