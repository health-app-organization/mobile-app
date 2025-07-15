import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AxiosJSON } from "../axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { getDashboard } from "./get-dashboard";
import { MedicalReminderApiesponse } from "../../types/profile/medical-reminder";

interface MedicalReminderError {
  message: string;
}

interface MedicalReminderState {
  loading: boolean;
}

const axios = AxiosJSON();

export const medicalReminder = createAsyncThunk(
  "user/medicalReminder",
  async (
    {
      medicine,
      dosage,
      startDate,
      recurrence,
      times,
    }: {
      medicine: string;
      dosage: string;
      startDate: string;
      recurrence: string;
      times: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(getMedicalReminderRequest());
      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      if (!verificationToken) {
        throw new Error("No verification token found");
      }

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const medicaldata = {
        medicine,
        dosage,
        startDate,
        recurrence,
        times,
      };

      const { data } = await axios.post<MedicalReminderApiesponse>(
        `/reminders`,
        {
          ...medicaldata,
        }
      );

      console.log(" upload data", data);
      if (verificationToken) {
        await dispatch(getDashboard());
      }

      dispatch(getMedicalReminderComplete());
      dispatch(getDashboard());

      if (data?.status === false) {
        return rejectWithValue({ message: data?.message });
      } else {
        // router.push("/(user)/(profile)");
        router.replace("/profile");
      }

      Toast.show({
        type: "success",
        text1: data?.message,
        visibilityTime: 5000,
      });
    } catch (error) {
      console.log("error", error);

      let errorMessage = "An error occurred";
      const axiosError = error as AxiosError<MedicalReminderError>; // Cast the error to an AxiosError.
      console.log("headers error", axiosError.response);

      if (axiosError.response && axiosError.response.data) {
        errorMessage = axiosError.response.data.message; // Set the error message to the response data message.
      } else if (axiosError.message) {
        errorMessage = axiosError.message;
      }

      dispatch(getMedicalReminderComplete());

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      }); // Show an error toast message.
      return rejectWithValue({ message: errorMessage }); // Reject the promise with the error message.
    }
  }
);

export const getmedicalReminder = createAsyncThunk(
  "user/medicalReminder",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getMedicalReminderRequest());
      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      if (!verificationToken) {
        throw new Error("No verification token found");
      }

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const { data } = await axios.post<MedicalReminderApiesponse>(
        `/reminders`
      );

      console.log(" upload data", data);
      if (verificationToken) {
        await dispatch(getDashboard());
      }

      dispatch(getMedicalReminderComplete());
      dispatch(getDashboard());

      if (data?.status === false) {
        return rejectWithValue({ message: data?.message });
      } else {
        // router.push("/(user)/(profile)");
        router.replace("/profile");
      }

      Toast.show({
        type: "success",
        text1: data?.message,
        visibilityTime: 5000,
      });
    } catch (error) {
      console.log("error", error);

      let errorMessage = "An error occurred";
      const axiosError = error as AxiosError<MedicalReminderError>; // Cast the error to an AxiosError.
      console.log("headers error", axiosError.response);

      if (axiosError.response && axiosError.response.data) {
        errorMessage = axiosError.response.data.message; // Set the error message to the response data message.
      } else if (axiosError.message) {
        errorMessage = axiosError.message;
      }

      dispatch(getMedicalReminderComplete());

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      }); // Show an error toast message.
      return rejectWithValue({ message: errorMessage }); // Reject the promise with the error message.
    }
  }
);

const initialState: MedicalReminderState = {
  loading: false,
};

const medicalReminderSlice = createSlice({
  name: "MedicalReminder",
  initialState,
  reducers: {
    getMedicalReminderRequest: (state) => {
      state.loading = true;
    },

    getMedicalReminderComplete: (state) => {
      state.loading = false;
      console.log("medical reminder complete" + state.loading);
    },
  },
});

export const { getMedicalReminderRequest, getMedicalReminderComplete } =
  medicalReminderSlice.actions;

export default medicalReminderSlice;
