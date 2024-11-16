import axios from "axios";
import {
    createUsersUrl,
    deleteUserUrl,
    getAllUsersUrl,
    loginUrl,
    registerUrl,
    showUserUrl,
    updateUserUrl,
    userProfileUrl,
} from "./end-point";
import AsyncStorage from "@react-native-async-storage/async-storage";

//! request template
const createRequest = (method, url, data, additionalHeaders = {}) => ({
    method,
    url,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...additionalHeaders,
    },
    data,
});

//! send request template
const sendRequest = async (
    requestOptions,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    setIsLoading(true);
    try {
        const response = await axios(requestOptions);
        if (response.status === 200) {
            setIsSuccess(true);
            return response.data;
        } else {
            console.log("Unexpected Response Status:", response.status);
        }
    } catch (error) {
        if (error.response) {
            setErrorMessage(error.response.data.message);
            console.error("Error status:", error.response.status);
            console.error("Error headers:", error.response.headers);
        } else if (error.request) {
            // Request was made but no response received
            console.error("Error request:", error.request);
        } else {
            // Something else happened while setting up the request
            console.error("Error message:", error.message);
        }
        throw error;
    } finally {
        setIsLoading(false);
    }
};

//! Auth Requests
export const loginRequest = async (
    userStatus = "user",
    email,
    password,
    additionalHeaders,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "POST",
        loginUrl(userStatus),
        { email, password },
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
    //* set the token in the async storage
};

export const registerRequest = async (
    userStatus = "user",
    email,
    password,
    phone,
    additionalHeaders,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "POST",
        registerUrl(userStatus),
        { email, password, phone },
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
    //* redirect to login
};

export const userProfileRequest = async (
    userStatus = "user",
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const token = AsyncStorage.getItem("token");
    const requestOptions = createRequest(
        "POST",
        userProfileUrl(userStatus),
        (additionalHeaders = { Authorization: `Bearer ${token}` })
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};

//! Users Requests
export const showUserRequest = async (
    id,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "GET",
        showUserUrl(id),
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};

export const getAllUsersRequest = async (
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "GET",
        getAllUsersUrl,
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};

export const createUsersRequest = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    gender,
    bloodGroup,
    height,
    weight,
    activityLevel,
    foodPreferences,
    password,
    role,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "POST",
        createUsersUrl,
        {
            firstName,
            lastName,
            email,
            phoneNumber,
            birthDate,
            gender,
            bloodGroup,
            height,
            weight,
            activityLevel,
            foodPreferences,
            password,
            role,
        },
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};

export const updateUserRequest = async (
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    gender,
    bloodGroup,
    height,
    weight,
    activityLevel,
    foodPreferences,
    password,
    role,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "PUT",
        updateUserUrl(id),
        {
            firstName,
            lastName,
            email,
            phoneNumber,
            birthDate,
            gender,
            bloodGroup,
            height,
            weight,
            activityLevel,
            foodPreferences,
            password,
            role,
        },
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};

export const deleteUserRequest = async (
    id,
    setErrorMessage,
    setIsLoading,
    setIsSuccess
) => {
    const requestOptions = createRequest(
        "DELETE",
        deleteUserUrl(id),
        additionalHeaders
    );
    return await sendRequest(
        requestOptions,
        setErrorMessage,
        setIsLoading,
        setIsSuccess
    );
};
