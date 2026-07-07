import { axiosInstance, axiosInstance2 } from "@/lib/axios";
import type { CreateBlogSchema } from "@/schemas/blog/createBlog";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface ResponseFileService {
  filePath: string;
  fileURL: string;
}

function useCreateBlog() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: CreateBlogSchema) => {
      const formData = new FormData();
      formData.append("file", payload.thumbnail);
      const folderName = "images";
      const fileName = Date.now() + Math.floor(Math.random() * 1000);
      const response = await axiosInstance.post<ResponseFileService>(
        `/files/${folderName}/${fileName}`,
        formData,
      );

      await axiosInstance2.post("/blogs", {
        title: payload.title,
        description: payload.description,
        category: payload.category,
        content: payload.content,
        thumbnail: response.data.fileURL,
      });
    },
    onSuccess: () => {
      toast.success("Create blog success!");
      navigate("/");
    },
    onError: () => {
      toast.error("Create blog failed!");
    },
  });
}

export default useCreateBlog;
