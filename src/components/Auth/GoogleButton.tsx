import GoogleIcon from "@/components/icons/GoogleIcon";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@/stores/useAuth";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function GoogleButton() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      try {
        const response = await axiosInstance.post("/auth/google", {
          accessToken: access_token,
        });

        login({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          profilePic: response.data.profilePic,
          role: response.data.role,
        });

        navigate("/");
      } catch {
        toast.error("Login failed!");
      }
    },
  });

  return (
    <button
      type="button"
      className="w-full h-11 flex items-center justify-center gap-2.5 rounded-lg border border-border bg-background text-sm font-medium hover:bg-surface transition-colors"
      onClick={() => handleLogin()}
    >
      <GoogleIcon />
      Continue with Google
    </button>
  );
}

export default GoogleButton;
