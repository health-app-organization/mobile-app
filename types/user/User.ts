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
