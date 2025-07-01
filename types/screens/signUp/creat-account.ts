import { UserData } from "types/user/User";

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string; // format should be corrected e.g. "1999-12-24"
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
}

// models/SeekerRegistrationResponse.ts

export interface SeekerRegistrationApiResponse {
  status: boolean;
  message: string;
  data: SeekerData;
  token: string;
}

export interface SeekerData {
  user: UserData;
  seeker: Seeker;
  emailSendStatus: boolean;
}

export interface Seeker {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  gender: "male" | "female" | string;
  image: string | null;
  maritalStatus: string | null;
  height: string | null;
  weight: string | null;
  bloodGroup: string | null;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}

// models/ProviderRegistrationResponse.ts

export interface ProviderRegistrationApiResponse {
  status: boolean;
  message: string;
  data: ProviderData;
}

export interface ProviderData {
  user: UserData;
  emailSendStatus: boolean;
  token: string;
}
