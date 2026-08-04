// src/pages/FeaturesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import digitalTicket from "../assets/img/digital-ticket.jpeg";
import ticket from "../assets/img/ticket.png";
import analytics from "../assets/img/analytics.png";
import queueDash from "../assets/img/queue-dashboard.png";
import realTime from "../assets/img/real-time-updates.png";
import multibranch from "../assets/img/multibranch.jpg";
import smartNot from "../assets/img/smart-notification.png";

import Footer from "../components/Footer";

import {
  FaQrcode,
  FaUsers,
  FaMobileAlt,
  FaBell,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

// Extended features list for the grid
const featureGrid = [
  {
    title: "Digital Tickets",
    desc: "Issued via QR scan, SMS, or WhatsApp for easy access.",
    icon: <FaQrcode className="text-[#2f2a76] text-5xl" />,
    img: digitalTicket,
  },
  {
    title: "Queue Dashboard",
    desc: "Simple interface for staff to manage customer flow.",
    icon: <FaUsers className="text-[#2f2a76] text-5xl" />,
    img: queueDash,
  },
  {
    title: "Real-Time Updates",
    desc: "Customers track progress on mobile (no install required).",
    icon: <FaMobileAlt className="text-[#2f2a76] text-5xl" />,
    img: realTime,
  },
  {
    title: "Smart Notifications",
    desc: "Alerts like 'You’re next!' or '3 people ahead'.",
    icon: <FaBell className="text-[#2f2a76] text-5xl" />,
    img: smartNot,
  },
  {
    title: "Multi-Branch Support",
    desc: "Perfect for chains like clinics or service centers.",
    icon: <FaBuilding className="text-[#2f2a76] text-5xl" />,
    img: multibranch,
  },
  {
    title: "Analytics",
    desc: "Reports on wait times, peak hours, and staff performance.",
    icon: <FaChartBar className="text-[#2f2a76] text-5xl" />,
    img: analytics,
  },
];

const FeaturesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fff] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-julius font-bold text-[#2f2a76] mb-6">
            Explore Our Core Features
          </h1>
          <p className="text-lg text-[#2f2a76]/80 font-raleway">
            From digital tickets to smart notifications, we provide everything
            you need to streamline queues and improve customer experience.
          </p>
        </div>
      </section>

      {/* Features Grid with Animations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featureGrid.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#ebeaeae5] rounded-2xl shadow-md overflow-hidden cursor-pointer"
            >
              <motion.img
                src={feature.img}
                alt={feature.title}
                className="w-full h-40 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-semibold text-[#2f2a76] mb-2">
                  {feature.title}
                </h2>
                <p className="text-[#2f2a76]/80">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expanded Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2f2a76] mb-4">
              Digital Tickets
            </h2>
            <p className="text-[#2f2a76]/80 mb-6">
              Customers get digital tickets via QR scan, SMS, or WhatsApp,
              eliminating paper waste and keeping things hassle-free.
            </p>
            <ul className="list-disc pl-5 text-[#2f2a76]/80 space-y-2">
              <li>Fast check-in process</li>
              <li>No physical queues</li>
              <li>Supports multiple channels</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#ebeaeae5] rounded-2xl p-10 shadow-md"
          >
            <img
              src={ticket}
              alt="Digital Tickets demo"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 -mb-14 bg-[#2f2a76] text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Ready to Transform Your Queue Management?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Start today and see how easy it is to manage queues, notify customers,
          and gain insights.
        </p>
        <a
          href="/pricing"
          className="px-8 py-4 bg-[#f4400d] text-white rounded-full font-semibold hover:bg-white hover:text-[#f4400d] transition-all duration-300"
        >
          See Pricing
        </a>
      </section>

    </>
  );
};

export default FeaturesPage;
