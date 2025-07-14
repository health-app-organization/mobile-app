import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AxiosFormData } from "../axios";
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

const axiosForm = AxiosFormData();

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (
    {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      image,
      bloodGroup,
      maritalStatus,
      height,
      weight,
    }: {
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      gender: string;
      image: string;
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

      axiosForm.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const dob = moment(dateOfBirth).format("YYYY-MM-DD");

      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("date_of_birth", dob);
      formData.append("gender", gender);
      formData.append("blood_group", bloodGroup);
      formData.append("marital_status", maritalStatus);
      formData.append("height", height);
      formData.append("weight", weight);

      console.log("avatar", image);
      console.log("formData", formData);
      // @ts-expect-error

      formData.append("image", {
        uri: image,
        type: "image/jpeg",
        name: "image.jpg",
      });

      const { data } = await axiosForm.post(
        `/seekers/update-profile1`,
        formData
      );

      console.log(" upload data", data);
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
