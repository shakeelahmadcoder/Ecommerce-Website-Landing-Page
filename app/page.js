import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductCard } from "./components/ProductCard";
import { SellingProducts } from "./components/SellingProducts";
import Timeline from "./components/TimeLine";


export default function Home() {
  return (
    <div>
     <Navbar/>
    <HeroSection/>
     <SellingProducts/>
    </div>
  );
}
