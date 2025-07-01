// import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// const baseURL = process.env.EXPO_PUBLIC_API_URL;

// export { AxiosError };

// export function AxiosWithoutHeaders() {
//   const axios = Axios.create({
//     baseURL,
//   });

//   return axios;
// }

// export function AxiosJSON() {
//   const axios = Axios.create({
//     baseURL,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     withCredentials: true,
//   });

//   // Add a request interceptor to include the Authorization header
//   axios.interceptors.request.use(
//     async (config: InternalAxiosRequestConfig) => {
//       try {
//         const token = await AsyncStorage.getItem("VerificationToken");
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       } catch (error) {
//         console.error("Error retrieving token from AsyncStorage:", error);
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   return axios;
// }

// export function AxiosFormData() {
//   const axios = Axios.create({
//     baseURL,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     withCredentials: true,
//   });

//   // Add a request interceptor to include the Authorization header
//   axios.interceptors.request.use(
//     async (config: InternalAxiosRequestConfig) => {
//       try {
//         const token = await AsyncStorage.getItem("VerificationToken");
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       } catch (error) {
//         console.error("Error retrieving token from AsyncStorage:", error);
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   return axios;
// }

import Axios, { AxiosError } from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export { AxiosError };

export function AxiosWithoutHeaders() {
  const axios = Axios.create({
    baseURL,
  });

  return axios;
}

export function AxiosJSON() {
  const axios = Axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return axios;
}

export function AxiosFormData() {
  const axios = Axios.create({
    baseURL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

  return axios;
}
