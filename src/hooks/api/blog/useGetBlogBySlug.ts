import { axiosInstance2 } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

function useGetBlogBySlug(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data } = await axiosInstance2.get<Blog>(`/blogs/${slug}`);
      return data;
    },
  });
}

export default useGetBlogBySlug;
