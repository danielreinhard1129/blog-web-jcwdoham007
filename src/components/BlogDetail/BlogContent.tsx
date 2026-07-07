interface BlogContentProps {
  content: string;
}

function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
      <p>{content}</p>
    </div>
  );
}

export default BlogContent;
