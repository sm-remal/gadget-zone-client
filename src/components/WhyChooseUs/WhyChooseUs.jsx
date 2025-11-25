"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample static data (can replace with anything)
const cards = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your products delivered in record time.",
    icon: "/why_choose/delivery.jpg", 
  },
  {
    id: 2,
    title: "High Quality",
    description: "Only top-notch quality products.",
    icon: "/why_choose/qulity.jpg",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "We are here for you any time.",
    icon: "/why_choose/servise.jpg",
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: "Best prices for all products.",
    icon: "/why_choose/affortable.jpg",
  },
];

const InteractiveCards = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white p-6 rounded-xl shadow-lg cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3
              className={`text-lg font-semibold transition-colors ${
                hovered === card.id ? "text-orange-500 text-xl" : "text-gray-800"
              }`}
            >
              {card.title}
            </h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCards;
