import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosJSON } from "../axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GetDashboardApiResponse,
  GetDashboardData,
} from "types/user/get-dashboard";
import Logout from "utilities/Logout";

interface GetDashBoardError {
  message: string;
}

interface GetDashBoardState {
  loading: boolean;
  data: GetDashboardData | null;
  error: string | null;
}

const axios = AxiosJSON();
export const getDashboard = createAsyncThunk(
  "auth/GetDashBoardAsync",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getDashBoardRequest());

      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      console.log("verificationToken", verificationToken);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const { data } = await axios.get<GetDashboardApiResponse>(`/dashboard`);
      dispatch(getDashBoardSuccess(data.data));
      dispatch(getDashBoardComplete());
      //   dispatch(getUserDetails());
    } catch (error) {
      let errorMessage = "Network Error";

      const axiosError = error as AxiosError<GetDashBoardError>;

      console.log("GetDashBoard Error", axiosError.code);
      console.log("GetDashBoard Error", axiosError.status);
      console.log("GetDashBoard Error", axiosError.message);
      console.log("GetDashBoard Error", axiosError.response);
      console.log("GetDashBoard Error", axiosError);

      if (axiosError.response) {
        if (axiosError.response.status === 403) {
          // Handle 403 Forbidden error
          // @ts-ignore
          Logout();
          errorMessage = "Access denied. Please log in again.";
        } else if (axiosError.response.data) {
          // Handle other errors
          errorMessage = axiosError.response.data.message;
        }
      }

      dispatch(getDashBoardComplete());

      return rejectWithValue({ message: errorMessage });
    }
  }
);

const initialState: GetDashBoardState = {
  loading: false,
  data: null,
  error: null,
};

const getDashBoardSlice = createSlice({
  name: "GetDashBoard",
  initialState,
  reducers: {
    getDashBoardRequest: (state) => {
      state.loading = true;
    },

    getDashBoardSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    getDashBoardComplete: (state) => {
      state.loading = false;
    },
  },
});

export const {
  getDashBoardComplete,
  getDashBoardRequest,
  getDashBoardSuccess,
} = getDashBoardSlice.actions;

export default getDashBoardSlice;
