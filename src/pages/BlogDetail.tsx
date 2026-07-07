import { Navbar } from "@/components/Navbar";
import Breadcrumb from "@/components/BlogDetail/Breadcrumb";
import BlogContent from "@/components/BlogDetail/BlogContent";
import BlogCover from "@/components/BlogDetail/BlogCover";
import BlogHeader from "@/components/BlogDetail/BlogHeader";
import BlogLoading from "@/components/BlogDetail/BlogLoading";
import BlogNotFound from "@/components/BlogDetail/BlogNotFound";
import useGetBlogBySlug from "@/hooks/api/blog/useGetBlogBySlug";
import { useParams } from "react-router";

function BlogDetail() {
  const params = useParams();

  const { data: blog, isPending } = useGetBlogBySlug(params.slug!);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {!blog && !isPending && <BlogNotFound />}

      {isPending ? (
        <BlogLoading />
      ) : (
        blog && (
          <article>
            <Breadcrumb category={blog.category} />
            <BlogHeader blog={blog} />
            <BlogCover thumbnail={blog.thumbnail} title={blog.title} />
            <BlogContent content={blog.content} />
          </article>
        )
      )}
    </div>
  );
}

export default BlogDetail;
