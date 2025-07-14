export interface GetDashboardApiResponse {
  status: boolean;
  message: string;
  data: GetDashboardData;
}

export interface GetDashboardData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "seeker" | "provider" | string;
  wallet?: DasboardWallet;
  seeker?: Seeker;
  provider?: Provider;
}

export interface Provider {
  id: string;
  firstName: string;
  lastName: string;
  image: string | null;
  gender: "male" | "female" | string;
  appointments: any[]; // Replace `any` with specific Appointment type if available
}

export interface Seeker {
  id: string;
  firstName: string;
  lastName: string;
  image: string | null;
  gender: "male" | "female" | string;
  appointments: any[]; // Replace `any` with specific Appointment type if available
}

export interface DasboardWallet {
  id: string;
  balance: string; // or number, depending on how you store it in backend
  currency: "NGN" | "USD" | string;
}
