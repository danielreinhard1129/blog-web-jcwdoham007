import { Footer } from "@/components/Footer";
import Grid from "@/components/Homepage/Grid";
import Hero from "@/components/Homepage/Hero";
import { Navbar } from "@/components/Navbar";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { parseAsInteger, useQueryState } from "nuqs";
import { useDebounceValue } from "usehooks-ts";

function Homepage() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [debounceSearch] = useDebounceValue(search, 500);

  const { data: blogs, isPending } = useGetBlogs({
    page,
    search: debounceSearch,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />
      <Grid blogs={blogs} isPending={isPending} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default Homepage;
