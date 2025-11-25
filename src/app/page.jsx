import BannerSlider from "@/components/Banner/Banner";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import MegaDeal from "@/components/MegaDeal/MegaDeal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <BannerSlider></BannerSlider>
    <LatestProducts></LatestProducts>
    <MegaDeal></MegaDeal>
    </div>
  );
}
