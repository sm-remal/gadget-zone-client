"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MegaDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 hours

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full my-10">

      {/* Banner Image */}
      <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/banner/mega2.jpg" 
          alt="Mega Deal Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT BELOW BANNER */}
      <div className="text-center mt-6"> 

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
          🔥 Mega Deal is Live!
        </h2>

        {/* Timer */}
        <div className="flex justify-center gap-10 text-center mb-6">
          <div>
            <div className="text-4xl font-bold text-red-600">{timeLeft.hours}</div>
            <div className="text-sm uppercase text-gray-600">Hours</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">{timeLeft.minutes}</div>
            <div className="text-sm uppercase text-gray-600">Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">{timeLeft.seconds}</div>
            <div className="text-sm uppercase text-gray-600">Seconds</div>
          </div>
        </div>

        {/* Button */}
        <a
          href="/mega-deal"
          className="bg-red-600 px-6 py-3 rounded-lg font-bold text-white hover:bg-red-700 transition shadow-md"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default MegaDeal;
