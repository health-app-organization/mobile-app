import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosJSON } from "../axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDashboard } from "./get-dashboard";

interface GetTransactionsError {
  message: string;
}

interface GetTransactionsState {
  loading: boolean;
  data: string | null;
  error: string | null;
}

const axios = AxiosJSON();
export const getTransactions = createAsyncThunk(
  "auth/GetTransactionsAsync",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getTransactionsRequest());

      const verificationToken: string | null = await AsyncStorage.getItem(
        "VerificationToken"
      );

      console.log("verificationToken", verificationToken);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${verificationToken}`;

      const { data } = await axios.get(`/transactions`);
      dispatch(getTransactionsSuccess(data.data));
      dispatch(getDashboard());
      dispatch(getTransactionsComplete());
    } catch (error) {
      let errorMessage = "Network Error";

      const axiosError = error as AxiosError<GetTransactionsError>;

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

      dispatch(getTransactionsComplete());

      return rejectWithValue({ message: errorMessage });
    }
  }
);

const initialState: GetTransactionsState = {
  loading: false,
  data: null,
  error: null,
};

const getTransactionsSlice = createSlice({
  name: "GetTransactions",
  initialState,
  reducers: {
    getTransactionsRequest: (state) => {
      state.loading = true;
    },

    getTransactionsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    getTransactionsComplete: (state) => {
      state.loading = false;
    },
  },
});

export const {
  getTransactionsComplete,
  getTransactionsRequest,
  getTransactionsSuccess,
} = getTransactionsSlice.actions;

export default getTransactionsSlice;
