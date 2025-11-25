"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    photo: "/customer/male1.jpg",
    rating: 5,
    comment: "Amazing products! Fast delivery and great quality.",
  },
  {
    id: 2,
    name: "Riya Akter",
    email: "riya@example.com",
    photo: "/customer/female1.jpg",
    rating: 4.8,
    comment: "Very satisfied with the purchase. Excellent customer service!",
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@example.com",
    photo: "/customer/male2.jpg",
    rating: 4.9,
    comment: "High-quality product and fast shipping. Highly recommend!",
  },
  {
    id: 4,
    name: "Zerin Wilson",
    email: "zerin@example.com",
    photo: "/customer/female2.jpg",
    rating: 4.7,
    comment: "Love it! Will definitely buy again.",
  },
];

const TestimonialsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
        ❤️ What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => setHovered(review.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-4">
              <Image
                src={review.photo}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.email}</p>
              </div>
            </div>

            <p className="text-gray-700 mt-4 italic">"{review.comment}"</p>

            <p
              className={`font-bold mt-3 ${
                hovered === review.id ? "text-yellow-500 text-lg" : "text-yellow-400"
              }`}
            >
              ⭐ {review.rating} / 5
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
