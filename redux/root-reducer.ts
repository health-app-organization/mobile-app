import { combineReducers } from "@reduxjs/toolkit";
import signUpSlice from "./create-account";

const rootReducer = combineReducers({
  signup: signUpSlice.reducer,
});

export default rootReducer;
