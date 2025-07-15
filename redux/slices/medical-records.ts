import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AxiosJSON } from "../axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import moment from "moment";
import { getDashboard } from "./get-dashboard";
import { MedicalRecordResponse } from "../../types/profile/medical-records";

interface MedicalRecordsError {
  message: string;
}

interface MedicalRecordsState {
  loading: boolean;
}

const axios = AxiosJSON();

export const medicalRecords = createAsyncThunk(
  "user/medicalRecords",
  async (
    {
      allergies,
      currMed,
      pastMed,
      chronicDisease,
      injuries,
      surgeries,
      smokingHabits,
      alcoholConsumption,
    }: // activityLevel,
    {
      allergies: string;
      currMed: string;
      pastMed: string;
      chronicDisease: string;
      injuries: string;
      surgeries: string;
      smokingHabits: string;
      alcoholConsumption: string;
      // activityLevel: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(getMedicalRecordsRequest());
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
        allergies,
        currMed,
        pastMed,
        chronicDisease,
        injuries,
        surgeries,
        smokingHabits,
        alcoholConsumption,
        // activityLevel,
      };

      const { data } = await axios.post<MedicalRecordResponse>(
        `/seekers/update-profile2`,
        {
          ...medicaldata,
        }
      );

      console.log(" upload data", data);
      if (verificationToken) {
        await dispatch(getDashboard());
      }

      dispatch(getMedicalRecordsComplete());

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
      const axiosError = error as AxiosError<MedicalRecordsError>; // Cast the error to an AxiosError.
      console.log("headers error", axiosError.response);

      if (axiosError.response && axiosError.response.data) {
        errorMessage = axiosError.response.data.message; // Set the error message to the response data message.
      } else if (axiosError.message) {
        errorMessage = axiosError.message;
      }

      dispatch(getMedicalRecordsComplete());

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      }); // Show an error toast message.
      return rejectWithValue({ message: errorMessage }); // Reject the promise with the error message.
    }
  }
);

const initialState: MedicalRecordsState = {
  loading: false,
};

const medicalRecordsSlice = createSlice({
  name: "MedicalRecords",
  initialState,
  reducers: {
    getMedicalRecordsRequest: (state) => {
      state.loading = true;
    },

    getMedicalRecordsComplete: (state) => {
      state.loading = false;
      console.log("update user complete" + state.loading);
    },
  },
});

export const { getMedicalRecordsRequest, getMedicalRecordsComplete } =
  medicalRecordsSlice.actions;

export default medicalRecordsSlice;
