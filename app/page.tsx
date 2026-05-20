"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cars = [
  {
    name: "Lamborghini Aventador",
    price: "$500,000",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },
  {
    name: "Porsche 911 Turbo S",
    price: "$230,000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nissan GT-R",
    price: "$180,000",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f",
  },
  {
    name: "Ferrari SF90",
    price: "$625,000",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 px-10 py-4 flex justify-between text-white">
        <h1 className="text-2xl font-bold">
          CarShowroom
        </h1>

        <div className="flex gap-6 items-center">
          <a
            href="#"
            className="hover:text-gray-400 transition"
          >
            Home
          </a>
          <a
            href="#cars"
            className="hover:text-gray-400 transition"
          >
            Cars
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full bg-white text-black"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <main
        className={`min-h-screen transition-all duration-500 ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
          }`}
      >
        <section className="relative h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/car.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex items-center px-10">
            <div>
              <h1 className="text-7xl font-bold text-white">
                Drive The Future
              </h1>

              <p className="mt-6 text-xl text-gray-300 max-w-xl">
                Discover premium supercars with luxury performance.
              </p>

              <a href="#cars">
                <button
                  className="mt-8 px-8 py-4 rounded-full font-semibold bg-white text-black hover:scale-105 transition"
                >
                  Explore Collection
                </button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />
        </section>

        <section id="cars" className="p-10">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full p-4 rounded-xl bg-zinc-900 mb-10"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {cars
              .filter((car) =>
                car.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((car, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-3xl overflow-hidden ${darkMode
                    ? "bg-zinc-900"
                    : "bg-gray-200"
                    }`}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-2xl font-bold">
                      {car.name}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {car.price}
                    </p>

                    <button className="mt-4 px-5 py-2 bg-white text-black rounded-full">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
        <section
          id="contact"
          className="py-24 px-10 text-center"
        >
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            This is Web programming project for study.
          </p>

          <div className="mt-10 space-y-4 text-lg">
            <p>Email: kawingowan@gmail.com</p>
            <p>Phone: 099-967-7786</p>
            <p>Location: Bangkok, Thailand</p>
          </div>


        </section>
      </main>
    </>
  );
}