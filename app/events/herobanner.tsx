"use client";

import React from "react";
import { motion } from "framer-motion";
import DarkVeil from "@/components/DarkVeil";

export default function AboutPage() {
  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <DarkVeil />
      <div className="absolute w-full top-0 mx-auto bg-top bg-cover border-b">
        <div className="min-h-[400px] sm:min-h-[400px] xl:pb-0 w-full flex justify-center flex-col">
          <div className="w-full max-w-4xl text-center mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4 sm:px-0  text-white dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl font-bold tracking-tight relative z-10"
            >
              Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white px-8 sm:px-0 mt-6 text-base md:text-xl  relative z-10 max-w-xl mx-auto"
            >
              We build next-gen digital experiences with performance,
              aesthetics, and cutting-edge technology.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
