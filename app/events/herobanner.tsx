"use client";

import React from "react";
import { motion } from "framer-motion";
import { ConfettiButton } from "@/components/ui/confetti";
import LiquidEther from "@/components/LiquidEther";

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="flex flex-col align-center justify-center absolute top-0 w-full h-full">
        <div className="relative w-full max-w-4xl text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0  text-black dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl font-bold tracking-tight relative z-10"
          >
            Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black dark:text-white px-8 sm:px-0 mt-6 text-base md:text-xl  relative z-10 max-w-xl mx-auto"
          >
            Stay in touch. We will update the events here shortly.
          </motion.p>
        </div>
      </div>
      <div style={{ width: "100%", height: 400, position: "relative" }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
    </div>
  );
}
