import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AxiosFormData, AxiosJSON } from "../axios";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import moment from "moment";
import { getDashboard } from "./get-dashboard";

interface UpdateUserError {
  message: string;
}

interface UpdateUserState {
  loading: boolean;
}

const axios = AxiosJSON();
const axiosForm = AxiosFormData();

export type FileDoc = {
  fileName: string;
  uri: string;
  mimeType: string;
};

export const uploadProfilePic = createAsyncThunk(
  "auth/updateUserAsync",
  async (
    {
      image,
    }: {
      image: FileDoc;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(getUpdateUserRequest()); // Dispatch the getUpdateUserRequest action to indicate that a UpdateUser request is being made.

      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      axiosForm.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const formData = new FormData();

      // @ts-expect-error
      formData.append("avatar", {
        uri: image.uri,
        type: image.mimeType,
        name: image.fileName,
      });

      const { data } = await axiosForm.post(`/upload-avatar`, formData);

      if (verificationToken) {
        await dispatch(getDashboard());
      }

      dispatch(getUpdateUserComplete());
      dispatch(getDashboard());

      Toast.show({
        type: "success",
        text1: data?.message,
        visibilityTime: 5000,
      });
    } catch (error) {
      console.log("Update Profile Image Error", error);
      let errorMessage = "An error occurred";
      const axiosError = error as AxiosError<UpdateUserError>; // Cast the error to an AxiosError.
      if (axiosError.response && axiosError.response.data) {
        errorMessage = axiosError.response.data.message; // Set the error message to the response data message.
      }

      dispatch(getUpdateUserComplete()); // Dispatch the getUpdateUserComplete action to indicate that the UpdateUser request has completed.

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      }); // Show an error toast message.
      return rejectWithValue({ message: errorMessage }); // Reject the promise with the error message.
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (
    {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bloodGroup,
      maritalStatus,
      height,
      weight,
    }: {
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      gender: string;
      bloodGroup: string;
      maritalStatus: string;
      height: string;
      weight: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(getUpdateUserRequest());
      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      if (!verificationToken) {
        throw new Error("No verification token found");
      }

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const dob = moment(dateOfBirth).format("YYYY-MM-DD");

      const updateData = {
        firstName,
        lastName,
        dateOfBirth: dob,
        gender,
        bloodGroup,
        maritalStatus,
        height,
        weight,
      };

      const { data } = await axios.post(`/seekers/update-profile1`, {
        ...updateData,
      });

      console.log(" upload user data", data);
      if (verificationToken) {
        await dispatch(getDashboard());
      }

      dispatch(getUpdateUserComplete());

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
      const axiosError = error as AxiosError<UpdateUserError>; // Cast the error to an AxiosError.
      console.log("headers error", axiosError.response);

      if (axiosError.response && axiosError.response.data) {
        errorMessage = axiosError.response.data.message; // Set the error message to the response data message.
      } else if (axiosError.message) {
        errorMessage = axiosError.message;
      }

      dispatch(getUpdateUserComplete());

      Toast.show({
        type: "error",
        text1: errorMessage,
        visibilityTime: 5000,
      }); // Show an error toast message.
      return rejectWithValue({ message: errorMessage }); // Reject the promise with the error message.
    }
  }
);

const initialState: UpdateUserState = {
  loading: false,
};

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {
    getUpdateUserRequest: (state) => {
      state.loading = true;
    },

    getUpdateUserComplete: (state) => {
      state.loading = false;
      console.log("update user complete" + state.loading);
    },
  },
});

export const { getUpdateUserRequest, getUpdateUserComplete } =
  updateUserSlice.actions;

export default updateUserSlice;
