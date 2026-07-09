import { axiosInstance } from "@/lib/axios";
import type { RegisterSchema } from "@/schemas/auth/register";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useRegister() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: RegisterSchema) => {
      await axiosInstance.post("/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("register success");
      navigate("/login");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "Something went wrong!");
    },
  });
}

export default useRegister;
