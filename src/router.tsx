import { createBrowserRouter } from "react-router";
import { authLoader } from "./loaders/auth";

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
    loader: authLoader,
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
]);
