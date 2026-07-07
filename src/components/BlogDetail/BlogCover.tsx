interface BlogCoverProps {
  thumbnail: string;
  title: string;
}

function BlogCover({ thumbnail, title }: BlogCoverProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
      <div className="overflow-hidden rounded-3xl border border-border shadow-card">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      </div>
    </div>
  );
}

export default BlogCover;
