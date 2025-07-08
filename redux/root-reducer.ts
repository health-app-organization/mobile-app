import { combineReducers } from "@reduxjs/toolkit";
import signUpSlice from "./slices/create-account";
import sendTokenVerificationSlice from "./slices/send-otp";
import loginSlice from "./slices/login";
import getDashBoardSlice from "./slices/get-dashboard";
import emailVerificationSlice from "./slices/verify-otp";

const rootReducer = combineReducers({
  signup: signUpSlice.reducer,
  otp: sendTokenVerificationSlice.reducer,
  auth: loginSlice.reducer,
  verifyOtp: emailVerificationSlice.reducer,
  dashboard: getDashBoardSlice.reducer,
});

export default rootReducer;
