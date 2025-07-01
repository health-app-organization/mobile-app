// export interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   phone_number: string;
//   avatar: string | null;
//   avatar_url: string | null;
//   user_initials: string | null;
//   gender: "male" | "female" | string;
//   occupation: string;
//   expertise: string | null;
//   education: string | null;
//   cv_path_url: string | null;
//   cv_path: string | null;
//   dob: string; // Format: YYYY-MM-DD
//   recovery_code: string | null;
//   verification_token: string | null;
//   is_active: boolean;
//   is_super: boolean;
//   email_verified_at: string | null;
//   created_at: string; // ISO timestamp
//   updated_at: string; // ISO timestamp
//   company_id: string | null;
//   mobile_push_token: null | string;
// }

export interface UserData {
  id: string;
  email: string;
  emailVerified: boolean;
  phone: string;
  status: "ACTIVE" | "INACTIVE"; // Add other possible statuses if any
  state: "STEP_ONE" | "STEP_TWO"; // Extend as needed
  role: "seeker" | "admin" | "employer" | "provider"; // Add other roles if they exist
  deviceToken: string | null;
  createdAt: string; // or Date if you're parsing it
  updatedAt: string;
}
export interface GetUserResponse {
  status: boolean;
  message: string;
  data: UserData;
}
