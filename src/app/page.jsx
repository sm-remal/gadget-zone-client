import BannerSlider from "@/components/Banner/Banner";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import MegaDeal from "@/components/MegaDeal/MegaDeal";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Reviews from "@/components/Reviews/Reviews"

export default function Home() {
  return (
    <div>
    <BannerSlider></BannerSlider>
    <LatestProducts></LatestProducts>
    <MegaDeal></MegaDeal>
    <Reviews></Reviews>
    <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
