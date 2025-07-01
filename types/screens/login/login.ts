import { UserData } from "types/user/User";

export interface LoginAiResponse {
  status: boolean;
  message: string;
  data: LoginData;
}

export interface LoginData {
  user: UserData;
  token: string;
}
