import { combineReducers } from "@reduxjs/toolkit";
import signUpSlice from "./slices/create-account";
import sendTokenVerificationSlice from "./slices/send-otp";
import loginSlice from "./slices/login";

const rootReducer = combineReducers({
  signup: signUpSlice.reducer,
  otp: sendTokenVerificationSlice.reducer,
  auth: loginSlice.reducer,
});

export default rootReducer;
