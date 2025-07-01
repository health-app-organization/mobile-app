import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/stack";
import { AxiosJSON } from "../axios";
import { UserData } from "types/user/User";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";
import { ApiErrorResponse, handleMutationError } from "utilities/ErrorHanler";
import {
  ProviderRegistrationApiResponse,
  SeekerRegistrationApiResponse,
  SignupPayload,
  SignupProviderPayload,
} from "types/screens/signUp/creat-account";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Utils } from "utilities/utils";

// const navigation = useNavigation<StackNavigation>();

const axios = AxiosJSON();

interface SignUpState {
  message: string | null;
  error: string | null;
  data: UserData | null;
  loading: boolean;
}

export const createAccountSeeker = createAsyncThunk(
  "user/createAccount",
  async (payload: SignupPayload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(SignUpRequest());

      const { data } = await axios.post<SeekerRegistrationApiResponse>(
        `/auth/seeker/register`,
        payload
      );

      console.log("Health Care login response ", data);

      if (!data.status) {
        Toast.show({
          type: "error",
          text1: data.message!!,
          visibilityTime: 5000,
        });
        dispatch(SignUpFailed(data.message));
        return rejectWithValue(data.message);
      } else {
        await storeUserCredentials(data);
        Toast.show({
          type: "success",
          text1: data.message!!,
          visibilityTime: 4000,
        });

        dispatch(SignUpSuccess(data));
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      handleMutationError(
        axiosError,
        "Failed to sign up. Please try again later."
      );
      const errorMessage =
        axiosError.response?.data?.message ||
        "Failed to sign up. Please try again later.";
      console.log("SignUp failed", axiosError.response);
      dispatch(SignUpFailed(errorMessage));
      return rejectWithValue(errorMessage);
    }

    async function storeUserCredentials(data: SeekerRegistrationApiResponse) {
      await AsyncStorage.multiSet([
        ["email", data.data.user.email ?? ""],
        ["VerificationToken", data.token ?? ""],
        ["data", JSON.stringify(data.data)],
        ["user_id", data.data.user.id ?? ""],
      ]);
      Utils.wait(2000);
      dispatch(SignUpSuccess(data.data)); // Dispatch the getLoginComplete action to indicate that the login request has completed.
    }
  }
);

export const createAccountProvider = createAsyncThunk(
  "user/createAccount",
  async (payload: SignupProviderPayload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(SignUpRequest());

      const { data } = await axios.post<ProviderRegistrationApiResponse>(
        `/auth/provider/register`,
        payload
      );

      if (!data.status) {
        Toast.show({
          type: "error",
          text1: data.message!!,
          visibilityTime: 5000,
        });
        dispatch(SignUpFailed(data.message));
        return rejectWithValue(data.message);
      }

      Toast.show({
        type: "success",
        text1: data.message!!,
        visibilityTime: 4000,
      });

      dispatch(SignUpSuccess(data));
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      handleMutationError(
        axiosError,
        "Failed to sign up. Please try again later."
      );
      const errorMessage =
        axiosError.response?.data?.message ||
        "Failed to sign up. Please try again later.";
      console.log("SignUp failed", axiosError.response);
      dispatch(SignUpFailed(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState: SignUpState = {
  loading: false,
  error: null,
  data: null,
  message: "",
};

const signUpSlice = createSlice({
  name: "SignUp/SignUp",
  initialState,
  reducers: {
    SignUpRequest(state) {
      state.loading = true;
      state.error = null;
    },
    SignUpSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data as UserData;
    },
    SignUpFailed(state, action) {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
});
export const { SignUpRequest, SignUpSuccess, SignUpFailed } =
  signUpSlice.actions;

export default signUpSlice;
