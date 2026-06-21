import Navbar from "@/components/Navbar";
import ShowBanner from "@/components/ShowBanner";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import { GalleryDuo } from "@/components/GalleryBand";
import BeverageSection from "@/components/BeverageSection";
import Upcycle from "@/components/Upcycle";
import Origin from "@/components/Origin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ShowBanner />
      <Navbar />
      <Hero />
      <ProductShowcase />
      <GalleryDuo />
      <BeverageSection />
      <Upcycle />
      <Origin />
      <Footer />
    </main>
  );
}
