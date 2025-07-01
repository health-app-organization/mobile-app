export interface GetDashboardApiResponse {
  status: boolean;
  message: string;
  data: GetDashboardData;
}

export interface GetDashboardData {
  id: string;
  email: string;
  phone: string;
  role: "seeker" | "provider" | string;
  wallet: DasboardWallet;
}

export interface DasboardWallet {
  id: string;
  balance: string; // or number, depending on how you store it in backend
  currency: "NGN" | "USD" | string;
}
