"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// React Icons
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pb-20">
      {/* Page Title */}
      <title>Contact Us | Gadget Zone</title>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We are here to assist you. Reach out anytime!
        </motion.p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {[
          {
            icon: <AiOutlineMail size={36} />,
            title: "Email",
            desc: "support@gadgetzone.com",
          },
          {
            icon: <AiOutlinePhone size={36} />,
            title: "Phone",
            desc: "+880 1700-000000",
          },
          {
            icon: <AiOutlineHome size={36} />,
            title: "Address",
            desc: "Mirpur 10, Dhaka, Bangladesh",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl shadow bg-white text-center hover:shadow-xl transition border"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center text-orange-600 mb-3">
              {box.icon}
            </div>
            <h3 className="text-lg font-semibold">{box.title}</h3>
            <p className="text-gray-700 mt-1">{box.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-lg relative overflow-hidden">
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-full shadow"
          >
            Message sent successfully!
          </motion.div>
        )}

        <motion.h2
          className="text-3xl font-bold text-center text-orange-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Send us a Message
        </motion.h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              required
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className="bg-orange-600 px-10 py-3 text-white font-semibold rounded-full shadow-lg"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Follow Us
        </motion.h2>

        <div className="flex justify-center gap-6">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="p-3 bg-white rounded-full shadow cursor-pointer"
            >
              <Icon size={26} className="text-orange-600" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-orange-600 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Find Us on the Map
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-2xl h-[420px] overflow-hidden shadow-lg"
        >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902593026197!2d90.39133791542696!3d23.7509034845891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f4a78b1f45%3A0x5d76cbb6c3a64f2e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1701000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 2 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
