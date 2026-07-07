import type { Blog } from "@/types/blog";

interface BlogHeaderProps {
  blog: Blog;
}

function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <header className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8">
      <span className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-medium">
        {blog.category}
      </span>
      <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
        {blog.title}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
        {blog.description}
      </p>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold">{blog.user.name}</p>
            <p className="text-xs text-muted-foreground">{blog.createdAt}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BlogHeader;
