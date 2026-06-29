import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import { Toaster } from "react-hot-toast";
import { authLoader } from "./loaders/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/blogs/:objectId",
    element: <BlogDetail />,
  },
  {
    path: "/create",
    element: <CreateBlog />,
    loader: authLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>,
);
