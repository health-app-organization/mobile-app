import { combineReducers } from "@reduxjs/toolkit";
import signUpSlice from "./slices/create-account";
import sendTokenVerificationSlice from "./slices/send-otp";
import loginSlice from "./slices/login";
import emailVerificationSlice from "./slices/verify-otp";
import getDashBoardSlice from "./slices/get-dashboard";
import updateUserSlice from "./slices/update-user";
import medicalRecordsSlice from "./slices/medical-records";
import getTransactionsSlice from "./slices/get-transaction";
import medicalReminderSlice from "./slices/medical-reminder";

const rootReducer = combineReducers({
  signup: signUpSlice.reducer,
  otp: sendTokenVerificationSlice.reducer,
  auth: loginSlice.reducer,
  verifyOtp: emailVerificationSlice.reducer,
  dashboard: getDashBoardSlice.reducer,
  updateSeeker: updateUserSlice.reducer,
  medicalRecords: medicalRecordsSlice.reducer,
  transactions: getTransactionsSlice.reducer,
  medicalReminder: medicalReminderSlice.reducer,
});

export default rootReducer;
