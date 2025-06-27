import { LoginSchemaType } from "@/components/schemas/LoginShema";
import { AuthRespose } from "@/types/Responses";
import api from "./api";
import { RegisterRequest } from "@/types/AuthRequests";

class authService {
  async login(data: LoginSchemaType): Promise<AuthRespose> {
    const response = await api.post<AuthRespose>("/login", data);
    return response.data;
  }

  async register(data: RegisterRequest): Promise<AuthRespose> {
    const response = await api.post<AuthRespose>("/usuario", data);
    return response.data;
  }

  async storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  async getStoredToken() {
    return localStorage.getItem("token");
  }

  async clearStoredToken(): Promise<void> {
    localStorage.removeItem("token");
  }
}

export default new authService();
