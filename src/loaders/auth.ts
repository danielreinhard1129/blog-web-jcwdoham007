import { useAuth } from "@/stores/useAuth";
import { redirect } from "react-router";

export const authLoader = () => {
  const { user } = useAuth.getState();

  if (!user) {
    return redirect("/login");
  }

  return {};
};

export const userGuardLoader = () => {
  const { user } = useAuth.getState();

  if (user?.role !== "USER") {
    return redirect("/login");
  }

  return {};
};
