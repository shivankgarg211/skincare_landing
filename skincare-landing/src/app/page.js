
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";
import BestSeller from "./components/BestSellers";
import HeroBanner from "./components/HeroBanner";
import ProductWithFilters from "./components/ProductWithFilters";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main >
               <Navbar />
               <HeroSection />
               <Product/>
               <BestSeller />
               <HeroBanner />
               <ProductWithFilters />
               <FAQSection />
               <Footer />
    
      </main>
     
    
  );
}
