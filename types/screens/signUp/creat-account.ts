import { UserData } from "types/user/User";

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number: string;
  gender: string;
  dob: string; // Format: YYYY-MM-DD
  occupation: string;
}

export interface SignupResponse {
  success: boolean;
  data: UserData;
  message: string;
  token: string;
}
