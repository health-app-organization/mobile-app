import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosJSON } from "redux/axios";

const axios = AxiosJSON();

// export const submitVerificationToken = createAsyncThunk(
//   "verification/submitVerificationToken",
//   async (
//     { email, otp, reason }: { email: string; otp: string; reason: string },
//     { dispatch, rejectWithValue }
//   ) => {
//     try {
//       dispatch(submitVerificationRequest());

//       // const value = reason;

//       // value === "verify_email";

//       const value =
//         reason === "verify_email" ? "verify_email" : "forgot_password";

//       const { data } = await axios.post(
//         `/auth/:status/password/reset/verify_otp`,
//         { email, otp, reason: value }
//       );

//       if (!data.status) {
//         Toast.show({
//           type: "error",
//           text1: data.message,
//           visibilityTime: 5000,
//         });
//         dispatch(submitVerificationFailed());
//         return rejectWithValue(data.message);
//       }

//       Toast.show({
//         type: "success",
//         text1: data.message,
//         visibilityTime: 5000,
//       });
//       dispatch(submitVerificationSuccess());
//       await AsyncStorage.multiRemove(["VerificationToken", "data"]);
//     } catch (error) {
//       console.log("submit Verification Error", error);

//       const axiosError = error as AxiosError<{ message: string }>;
//       const errorMessage =
//         axiosError.response?.data?.message ||
//         "An error occurred while submiting the verification token.";
//       Toast.show({
//         type: "error",
//         text1: errorMessage,
//         visibilityTime: 5000,
//       });
//       dispatch(submitVerificationFailed());
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

export const submitVerificationToken = createAsyncThunk(
  "verification/submitVerificationToken",
  async (
    { email, otp, reason }: { email: string; otp: string; reason: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(submitVerificationRequest());

      const { data } = await axios.post("/auth/verify-otp", {
        email,
        otp,
        reason,
      });

      console.log("Health Care login response ", data);

      if (!data.status) {
        Toast.show({
          type: "error",
          text1: data.message,
          visibilityTime: 5000,
        });
        dispatch(submitVerificationFailed());
        return rejectWithValue(data.message);
      }

      Toast.show({
        type: "success",
        text1: data.message,
        visibilityTime: 5000,
      });
      dispatch(submitVerificationSuccess());
    } catch (error) {
      console.log("submit Verification Error", error);

      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "An error occurred while submitting the verification token.";

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      });
      dispatch(submitVerificationFailed());
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

const emailVerificationSlice = createSlice({
  name: "verification/submitVerificationToken",
  initialState,
  reducers: {
    submitVerificationRequest: (state) => {
      state.loading = true;
    },
    submitVerificationSuccess: (state) => {
      state.loading = false;
    },
    submitVerificationFailed: (state) => {
      state.loading = false;
    },
  },
});

export const {
  submitVerificationRequest,
  submitVerificationSuccess,
  submitVerificationFailed,
} = emailVerificationSlice.actions;

export default emailVerificationSlice;
