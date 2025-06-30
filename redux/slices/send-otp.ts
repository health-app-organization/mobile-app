import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OtpAiResponse } from "../../types/screens/signUp/otp";
import { AxiosJSON } from "redux/axios";

const axios = AxiosJSON();

export const sendVerificationToken = createAsyncThunk(
  "verification/sendVerificationToken",
  async (email: string, { dispatch, rejectWithValue }) => {
    try {
      dispatch(sendVerificationRequest());

      const data = (await axios.post(`auth/send-otp`, { email }))
        .data as OtpAiResponse;

      if (!data.status) {
        Toast.show({
          type: "error",
          text1: data.message,
          visibilityTime: 5000,
        });
        dispatch(sendVerificationFailed());
        return rejectWithValue(data.message);
      }

      Toast.show({
        type: "success",
        text1: data.message,
        visibilityTime: 5000,
      });
      dispatch(sendVerificationSuccess());
    } catch (error) {
      console.log("Verification Error", error);

      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "An error occurred while sending the verification token.";
      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      });
      dispatch(sendVerificationFailed());
      return rejectWithValue(errorMessage);
    }
  }
);

interface VerificationState {
  loading: boolean;
}

const initialState: VerificationState = {
  loading: false,
};

const sendTokenVerificationSlice = createSlice({
  name: "verification/sendVerificationToken",
  initialState,
  reducers: {
    sendVerificationRequest: (state) => {
      state.loading = true;
    },
    sendVerificationSuccess: (state) => {
      state.loading = false;
    },
    sendVerificationFailed: (state) => {
      state.loading = false;
    },
  },
});

export const {
  sendVerificationRequest,
  sendVerificationSuccess,
  sendVerificationFailed,
} = sendTokenVerificationSlice.actions;

export default sendTokenVerificationSlice;
