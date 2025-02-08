import axios, { AxiosError } from "axios";
import {
  createUsersUrl,
  registerUrlone,
  registerUrltwo,
  userLoginUrl,
} from "../patientsendpoint/endpoint";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Dispatch, Key, SetStateAction } from "react";

export const RegisterDataOne = async (
  email: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string | null>>,
  setCurrentStep: Dispatch<SetStateAction<number>>
) => {
  try {
    setIsLoading(true);
    const data = { email: email };
    const response = await axios.post(registerUrlone, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(response.data);
    if (response.data.emailSendStatus === "success") {
      const tokenotp = response.data.token;
      console.log("ok");
      await AsyncStorage.setItem("otptoken", tokenotp);
      setCurrentStep((prevStep) => prevStep + 1);
      setErrorMessage(""); // Clear any previous error messages
      // Handle success logic
    }
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error response:", error.response.data);

      // Extract error message or use a fallback
      const message =
        error.response.data.error || "An error occurred. Please try again.";
      setErrorMessage(message);
    } else if (error.request) {
      // Request was made, but no response received
      console.error("Error request:", error.request);
      setErrorMessage(
        "No response from the server. Please check your network connection."
      );
    } else {
      // Other errors
      console.error("Error message:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};

export const RegisterDataTwo = async (
  email: string,
  otp: string[] | string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string | null>>,
  setCurrentStep: Dispatch<SetStateAction<number>>
) => {
  const tokenget = await AsyncStorage.getItem("otptoken");
  try {
    setIsLoading(true);
    const data = { email: email, otp: otp };
    console.log(otp);
    const response = await axios.post(registerUrltwo, data, {
      headers: {
        Authorization: `Bearer ${tokenget}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response.data);
    // Example success logic
    if (response.data.message === "OTP verified successfully") {
      setCurrentStep((prevStep) => prevStep + 1);
      setErrorMessage(""); // Clear any previous error messages
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);

      // Extract the error message or compose it
      const message =
        error.response.data.error?.message ||
        JSON.stringify(error.response.data.error) ||
        "An error occurred. Please try again.";

      setErrorMessage(message);
    } else if (error.request) {
      console.error("Error request:", error.request);
      setErrorMessage(
        "No response from the server. Please check your network connection."
      );
    } else {
      console.error("Error message:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};

export const RegisterDataThree = async (
  data: {
    email: string;
    password: string;
    [key: string]: any; // Add other properties as needed
  },
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string | null>>,
  setCurrentStep: Dispatch<SetStateAction<number>>
) => {
  console.log("ok");
  const tokenget = await AsyncStorage.getItem("otptoken");
  try {
    setIsLoading(true);
    const response = await axios.post(createUsersUrl, data, {
      headers: {
        Authorization: `Bearer ${tokenget}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response.data);
    if (
      response.status === 201 ||
      response.status === 200 ||
      response.status === 203
    ) {
      setErrorMessage(""); // Clear any error messages
      const message = "ok";
      return message;
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);

      // Extract the error message or compose it
      const message =
        error.response.data.error?.message ||
        JSON.stringify(error.response.data.error) ||
        "An error occurred. Please try again.";

      setErrorMessage(message);
    } else if (error.request) {
      console.error("Error request:", error.request);
      setErrorMessage(
        "No response from the server. Please check your network connection."
      );
    } else {
      console.error("Error message:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};
export const loginfunction = async (
  data: {
    email: string;
    password: string;
  },
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string>>
) => {
  const tokenget = await AsyncStorage.getItem("otptoken");
  try {
    setIsLoading(true);

    // Serialize data to x-www-form-urlencoded format
    const serializedData = new URLSearchParams(data).toString();
    const response = await axios.post(userLoginUrl, serializedData, {
      headers: {
        Authorization: `Bearer ${tokenget}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    if (
      response.status === 201 ||
      response.status === 200 ||
      response.status === 203
    ) {
      setErrorMessage(""); // Clear any error messages
      AsyncStorage.setItem("token", response.data.token);
      return {
        message: "ok",
        userDetails: response.data.me,
      };
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);

      // Extract the error message or compose it
      const message =
        error.response.data.error?.message ||
        JSON.stringify(error.response.data.error) ||
        "An error occurred. Please try again.";

      setErrorMessage(message);
    } else if (error.request) {
      console.error("Error request:", error.request);
      setErrorMessage(
        "No response from the server. Please check your network connection."
      );
    } else {
      console.error("Error message:", error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};
