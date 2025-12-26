import { HeroSection } from "./components/HeroSection";
import Timeline from "./components/TimeLine";
import { SellingProducts } from "./components/SellingProducts/SellingProducts";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { NewsLetter } from "./components/NewsLetter";


export default function Home() {
  return (
    <div>
    <HeroSection/>
     <SellingProducts/>
     <Timeline/>
     <OurProducts/>
     <Testimonials/>
     <CallToAction/>
     <NewsLetter/>
    </div>
  );
}
