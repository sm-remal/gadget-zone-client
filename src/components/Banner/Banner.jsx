


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  { id: 1, img: "/banner/discount.jpg", title: "Mega Discount Offer", desc: "Grab the hottest deals of the season with up to 60% off!" },
  { id: 2, img: "/banner/watch.PNG", title: "Premium Smart Watches", desc: "Stay ahead of time with our modern and stylish smart watches." },
  { id: 3, img: "/banner/phone.jpg", title: "Latest Smartphones", desc: "Experience cutting-edge technology with the newest smartphones." },
  { id: 4, img: "/banner/laptop.jpg", title: "High Performance Laptops", desc: "Upgrade your workflow with powerful and sleek laptops." },
  { id: 5, img: "/banner/head_phone.jpg", title: "Wireless Headphones", desc: "Feel the music like never before with our premium audio devices." },
];

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    // Reset title immediately when slide changes
    setCurrentTitle("");

    const fullText = sliderData[activeIndex].title;
    let charIndex = 0;

    const interval = setInterval(() => {
      setCurrentTitle((prev) => prev + fullText.charAt(charIndex));
      charIndex++;
      if (charIndex >= fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="w-full h-[75vh] md:h-[85vh] relative">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image src={item.img} alt={item.title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 text-center">
                <div className="flex flex-col items-center gap-3">

                  {/* Only active slide types */}
                  <h2
                    key={activeIndex} // force re-render each slide
                    className="text-3xl md:text-5xl font-bold text-white"
                    style={{ textShadow: "2px 3px 6px rgba(0,0,0,0.9)" }}
                  >
                    {index === activeIndex ? currentTitle : item.title}
                  </h2>

                  <p
                    className="text-base md:text-lg text-white max-w-2xl"
                    style={{ textShadow: "1px 2px 6px rgba(0,0,0,0.8)" }}
                  >
                    {item.desc}
                  </p>

                  <button className="mt-4 px-7 py-3 bg-white/90 text-black font-semibold rounded-lg hover:bg-orange-300 transition">
                    Shop Now
                  </button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
