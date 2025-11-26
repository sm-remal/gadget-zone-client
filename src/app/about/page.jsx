"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const teamMembers = [
  { id: 1, name: "Tasrif Khan", role: "Founder & CEO", photo: "/team/team2.jpg" },
  { id: 2, name: "Shovik Hasan", role: "Product Manager", photo: "/team/team4.jpg" },
  { id: 3, name: "Abonti Ray", role: "Lead Developer", photo: "/team/team3.jpg" },
  { id: 4, name: "Suraiya Akter", role: "Customer Success", photo: "/team/team5.jpg" },
];

const statsData = [
  { id: 1, label: "Products Sold", value: 1500 },
  { id: 2, label: "Happy Customers", value: 1200 },
  { id: 3, label: "Daily Visitors", value: 800 },
];

const About = () => {
  // State for count-up animation
  const [stats, setStats] = useState(
    statsData.map(stat => ({ ...stat, count: 0 }))
  );

  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.value / 50);
      return setInterval(() => {
        setStats(prev => {
          const newStats = [...prev];
          if (newStats[idx].count < stat.value) {
            newStats[idx].count += increment;
            if (newStats[idx].count > stat.value) newStats[idx].count = stat.value;
          }
          return newStats;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16 space-y-20">
      <title>About Us | Gadget Zone</title>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl text-orange-600 font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing the best products and services to our
          customers. Our mission is to bring quality, affordability, and
          innovation together.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <motion.div
          className="md:flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/top_gadget.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </motion.div>
        <motion.div
          className="md:flex-1 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-orange-600 font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded with the goal of providing top-quality gadgets and
            electronics, we have grown into a trusted platform for tech lovers.
          </p>
          <p className="text-gray-700">
            We carefully select every product we sell, ensuring it meets high
            standards of quality and performance. Our team is passionate about
            technology and is always ready to support our customers.
          </p>
          <p className="text-gray-700">
            At Gadget Haven, we believe that technology should enhance everyday life. Our team constantly explores the latest innovations to bring our customers the newest gadgets.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-blue-100 p-6 rounded-lg shadow hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl text-orange-600 font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Deliver high-quality products with excellent customer service.
          </p>
        </motion.div>
        <motion.div
          className="bg-blue-100 p-6 rounded-lg shadow hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl text-orange-600 font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            Become the most trusted and innovative online tech store.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div>
        <h2 className="text-3xl text-orange-600 font-bold text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Integrity", "Innovation", "Customer First"].map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-purple-200 p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{value}</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl text-orange-600 font-bold text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <motion.div
              key={member.id}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:scale-105 transition"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{member.name}</h3>
              <p className="text-gray-500 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fun Facts / Stats */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(stat => (
            <motion.div
              key={stat.id}
              className="bg-red-100 p-6 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-4xl font-bold text-orange-500">{stat.count}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
