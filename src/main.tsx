import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <NuqsAdapter>
      <RouterProvider router={router} />
      <Toaster />
    </NuqsAdapter>
  </QueryClientProvider>,
);
