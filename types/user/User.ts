export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  phone_number: string;
  avatar: string | null;
  avatar_url: string | null;
  user_initials: string | null;
  gender: "male" | "female" | string;
  occupation: string;
  expertise: string | null;
  education: string | null;
  cv_path_url: string | null;
  cv_path: string | null;
  dob: string; // Format: YYYY-MM-DD
  recovery_code: string | null;
  verification_token: string | null;
  is_active: boolean;
  is_super: boolean;
  email_verified_at: string | null;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  company_id: string | null;
  mobile_push_token: null | string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  data: UserData;
  token: string;
}

export interface GetUserResponse {
  success: boolean;
  message: string;
  data: UserData;
}

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
