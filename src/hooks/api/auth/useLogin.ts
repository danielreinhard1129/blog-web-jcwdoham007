import { axiosInstance2 } from "@/lib/axios";
import { useAuth } from "@/stores/useAuth";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  name: string;
  email: string;
  profilePic: string;
  role: string;
  accessToken: string;
}

function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const response = await axiosInstance2.post<LoginResponse>("/auth/login", {
        email: payload.email,
        password: payload.password,
      });
      return response.data;
    },
    onSuccess: (response) => {
      toast.success("login success");

      login({
        id: response.id,
        name: response.name,
        email: response.email,
        profilePic: response.profilePic,
        role: response.role,
        accessToken: response.accessToken,
      });

      navigate("/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "login failed");
    },
  });
}

export default useLogin;
