import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import { GalleryDuo } from "@/components/GalleryBand";
import Upcycle from "@/components/Upcycle";
import Origin from "@/components/Origin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <GalleryDuo />
      <Upcycle />
      <Origin />
      <Footer />
    </main>
  );
}
