import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Upcycle from "@/components/Upcycle";
import Origin from "@/components/Origin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Upcycle />
      <Origin />
      <Footer />
    </main>
  );
}
