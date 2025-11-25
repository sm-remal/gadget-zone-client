import BannerSlider from "@/components/Banner/Banner";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <BannerSlider></BannerSlider>
    <LatestProducts></LatestProducts>
    </div>
  );
}
