import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

function useGetBlogBySlug(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Blog>(`/blogs/${slug}`);
      return data;
    },
  });
}

export default useGetBlogBySlug;
