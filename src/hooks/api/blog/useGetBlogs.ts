import { axiosInstance2 } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import type { PageableResponse } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetBlogsQuery {
  page: number;
  search: string;
}

function useGetBlogs({ page, search }: GetBlogsQuery) {
  return useQuery({
    queryKey: ["blogs", page, search],
    queryFn: async () => {
      const { data } = await axiosInstance2.get<PageableResponse<Blog>>(
        "/blogs",
        { params: { page, search } },
      );
      return data;
    },
  });
}

export default useGetBlogs;
