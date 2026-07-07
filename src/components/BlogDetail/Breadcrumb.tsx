import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface BreadcrumbProps {
  category: string;
}

function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Stories
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{category}</span>
      </nav>
    </div>
  );
}

export default Breadcrumb;
