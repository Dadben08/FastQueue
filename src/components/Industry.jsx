import React from "react";
import {
  Building2,
  Hospital,
  School,
  Utensils,
  Store,
  Warehouse,
  Scissors,
  Landmark,
  Hotel,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import queueBg from "../assets/img/fastqueue.png";
import Footer from "../components/Footer";
import bankImg from "../assets/img/bank.webp";
import hospitalImg from "../assets/img/Hospital.webp";
import schoolImg from "../assets/img/School.webp";
import restaurantImg from "../assets/img/Resturant.webp";
import retailImg from "../assets/img/Retail.webp";
import warehouseImg from "../assets/img/Warehouse.webp";
import salonImg from "../assets/img/Salon.webp";
import hotelImg from "../assets/img/Hotel.webp";
import governmentImg from "../assets/img/Government.webp";







const industries = [
  {
    title: "Banks",
    path: "/banks",
    description:
      "Manage customer queues, appointments, and branch traffic efficiently.",
    icon: Building2,
    image: bankImg,
  },

  {
    title: "Hospitals & Clinics",
    path: "/hospitals",
    description:
      "Reduce waiting room congestion and improve patient flow.",
    icon: Hospital,
    image: hospitalImg,
  },

  {
    title: "Schools & Universities",
    path: "/school",
    description:
      "Organize admissions, student services, and administrative queues.",
    icon: School,
    image: schoolImg,
  },

  {
    title: "Restaurants",
    path: "/restaurants",
    description:
      "Handle reservations, waiting lists, and customer notifications.",
    icon: Utensils,
    image: restaurantImg,
  },

  {
    title: "Retail Stores",
    path: "/retail",
    description:
      "Improve customer service with smart queue management.",
    icon: Store,
    image: retailImg,
  },

  {
    title: "Government Offices",
    path: "/government",
    description:
      "Digitize public service queues and appointment scheduling.",
    icon: Landmark,
    image: governmentImg,
  },

  {
    title: "Barbershops & Salons",
    path: "/Barber",
    description:
      "Manage customer queues, appointments, and branch traffic efficiently.",
    icon: Scissors,
    image: salonImg,
  },

  {
    title: "Warehouses",
    path: "/warehouses",
    description:
      "Manage customer queues and logistics operations efficiently.",
    icon: Warehouse,
    image: warehouseImg,
  },

  {
    title: "Hotels",
    path: "/hotels",
    description:
      "Improve guest check-in and service management.",
    icon: Hotel,
    image: hotelImg,
  },
];

const benefits = [
  "Real-time queue management",
  "SMS and email notifications",
  "Appointment scheduling",
  "Analytics and reporting",
  "Multi-branch support",
  "Customer wait time tracking",
];

const Industry = () => {
  return (
    <div className="min-h-screen  text-white">
      {/* HERO */}

      <section
  className="
    py-20
    px-6
    bg-cover
    bg-center
    relative
    overflow-hidden
    h-[650px]
  "
  style={{
    backgroundImage: `url(${queueBg})`,
  }}
>
  {/* Background Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-[#1e1c1cc2]
      opacity-80
    "
  ></div>


  {/* Content */}
  <div
    className="
      relative
      z-10
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-10
      items-center
    "
  >

    <div>
      <h1 className="text-5xl font-extrabold leading-tight font-raleway">
  Smart queue management for every industry
</h1>

      <p className="mt-6 text-lg text-red-100">
        Help your organization reduce waiting time, improve customer
        satisfaction, and manage queues efficiently with our digital queue
        platform.
      </p>


      <div className="mt-8 flex flex-wrap gap-4">

        <Link
          to="/signup"
          className="
            bg-[#F4400D]
            text-white
            px-6
            py-3
            rounded-full
            font-semibold
            flex
            items-center
            hover:bg-gray-100
            hover:text-[#F4400D]
            transition
          "
        >
          Register your business
          <ArrowRight size={18} className="ml-2" />
        </Link>


        <Link
          to="/dashboard"
          className="
            border
            border-white
            px-6
            py-3
            rounded-full
            font-semibold
            hover:bg-white
            hover:text-[#F4400D]
            transition
          "
        >
          View customer portal
        </Link>

      </div>
    </div>



    <div className="flex justify-center">

      <div
        className="
          bg-white/20
          backdrop-blur
          rounded-3xl
          p-8
          w-full
          max-w-md
        "
      >

        <div className="space-y-4">

          <div className="bg-white rounded-xl p-4 text-gray-800">
            <p className="text-sm text-gray-500">
              Current queue
            </p>

            <h3 className="text-3xl font-bold text-[#F4400D]">
              A023
            </h3>
          </div>


          <div className="bg-white rounded-xl p-4 text-gray-800">
            <p className="text-sm text-gray-500">
              Average wait time
            </p>

            <h3 className="text-3xl font-bold">
              12 mins
            </h3>
          </div>


          <div className="bg-white rounded-xl p-4 text-gray-800">
            <p className="text-sm text-gray-500">
              Customers served today
            </p>

            <h3 className="text-3xl font-bold">
              186
            </h3>
          </div>


        </div>

      </div>

    </div>


  </div>

</section>

      {/* INDUSTRIES */}

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Industries we serve
            </h2>

            <p className="text-gray-600 mt-3">
              Designed for organizations that want to modernize customer flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link key={industry.title} to={industry.path}>
                  <div
                    className="
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-sm
                    border
                    border-gray-100
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition
                    cursor-pointer"
                  >
                    <div
                      className="
    w-14
    h-14
    rounded-xl
    bg-[#F4400D]
    flex
    items-center
    justify-center
  "
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3
                      className="
                    text-xl
                    font-semibold
                    text-gray-900
                    mt-4"
                    >
                      {industry.title}
                    </h3>

                    <p
                      className="
                    text-gray-600
                    mt-3
                    leading-relaxed"
                    >
                      {industry.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="py-20 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Why businesses choose our platform
      </h2>

      <p className="text-gray-600 mt-4 leading-relaxed">
        Our system helps businesses reduce overcrowding, improve staff
        efficiency, and deliver a better customer experience.
      </p>
    </div>


    <div className="grid gap-4">
      {benefits.map((benefit) => (
        <div
          key={benefit}
          className="
            flex
            items-center
            bg-white
            rounded-xl
            p-4
            shadow-sm
            hover:shadow-md
            transition
            border
            border-gray-100
          "
        >

          <CheckCircle 
            className="text-[#F4400D] mr-3"
            size={22}
          />

          <span className="text-gray-800 font-medium">
            {benefit}
          </span>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* CTA */}

      <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-gray-900">
      Ready to digitize your customer queues?
    </h2>

    <p className="text-gray-600 mt-4 text-lg">
      Join banks, hospitals, schools, restaurants, and organizations that
      are transforming the way customers wait.
    </p>

    <div className="mt-8 flex justify-center gap-4 flex-wrap">

      <Link
        to="/signup"
        className="
          bg-[#F4400D]
          text-white
          px-8
          py-3
          rounded-full
          font-semibold
          hover:bg-[#d83a0b]
          transition
        "
      >
        Get started
      </Link>

      <Link
        to="/"
        className="
          border
          border-[#F4400D]
          text-[#F4400D]
          px-8
          py-3
          rounded-full
          font-semibold
          hover:bg-[#F4400D]
          hover:text-white
          transition
        "
      >
        Back to home
      </Link>

    </div>

  </div>
</section>
<Footer />
    </div>
    
  );
};

export default Industry;
