import { createBrowserRouter } from "react-router";
import { userGuardLoader } from "./loaders/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { default: Homepage } = await import("./pages/Homepage");
      return { Component: Homepage };
    },
  },
  {
    path: "/login",
    lazy: async () => {
      const { default: Login } = await import("./pages/Login");
      return { Component: Login };
    },
  },
  {
    path: "/blogs/:slug",
    lazy: async () => {
      const { default: BlogDetail } = await import("./pages/BlogDetail");
      return { Component: BlogDetail };
    },
  },
  {
    path: "/create",
    loader: userGuardLoader,
    lazy: async () => {
      const { default: CreateBlog } = await import("./pages/CreateBlog");
      return { Component: CreateBlog };
    },
  },
  {
    path: "/register",
    lazy: async () => {
      const { default: Register } = await import("./pages/Register");
      return { Component: Register };
    },
  },
  {
    path: "/forgot-password",
    lazy: async () => {
      const { default: ForgotPass } = await import("./pages/ForgotPassword");
      return { Component: ForgotPass };
    },
  },
  {
    path: "/reset-password/:token",
    lazy: async () => {
      const { default: ResetPass } = await import("./pages/ResetPassword");
      return { Component: ResetPass };
    },
  },
]);
