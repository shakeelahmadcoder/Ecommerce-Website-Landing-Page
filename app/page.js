import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import Timeline from "./components/TimeLine";
import { SellingProducts } from "./components/SellingProducts/SellingProducts";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { Testimonials } from "./components/Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
     <Navbar/>
    <HeroSection/>
     <SellingProducts/>
     <Timeline/>
     <OurProducts/>
     <Testimonials/>
    </div>
  );
}
