import { axiosInstance } from "@/lib/axios";
import type { CreateBlogSchema } from "@/schemas/blog/createBlog";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useCreateBlog() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: CreateBlogSchema) => {
      const formData = new FormData();

      formData.append("thumbnail", payload.thumbnail);
      formData.append("title", payload.title);
      formData.append("description", payload.description);
      formData.append("category", payload.category);
      formData.append("content", payload.content);

      await axiosInstance.post("/blogs", formData);
    },
    onSuccess: () => {
      toast.success("Create blog success!");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);

      toast.error("Create blog failed!");
    },
  });
}

export default useCreateBlog;
