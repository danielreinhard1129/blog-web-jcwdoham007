import { Footer } from "@/components/Footer";
import Grid from "@/components/Homepage/Grid";
import Hero from "@/components/Homepage/Hero";
import { Navbar } from "@/components/Navbar";

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Grid />
      <Footer />
    </div>
  );
}

export default Homepage;
