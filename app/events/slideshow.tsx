"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface EventGalleryProps {
  events: {
    id: string;
    name: string;
    images: { src: string; alt: string }[];
  }[];
}

export default function EventGallery({ events }: EventGalleryProps) {
  const [activeEvent, setActiveEvent] = useState(events[0].id);

  const currentEvent = events.find((e) => e.id === activeEvent)!;

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Event selector */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEvent(event.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                event.id === activeEvent
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {currentEvent.images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
