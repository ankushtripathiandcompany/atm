"use client";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UniqueHeroWithSidebar() {
  return (
    <div className=" dark:bg-black mx-auto relative flex justify-center flex-col md:flex-row bg-[url('/images/herobg.jpg')] bg-center bg-cover border-b">
      <div className="bg-[rgba(0,0,0,0.34)] dark:bg-[rgba(0,0,0,0.8)] pb-12 sm:pb-8 xl:pb-0 w-full min-h-[74vh] flex">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-1 sm:px-6 py-8 pb-2 sm:py-16">
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* Text Content */}

            <div className="flex justify-center xl:justify-end pl-0 xl:pl-20">
              <div className="max-w-[800px] space-y-6 text-center xl:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-2xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    <span className="text-center xl:text-left font-bold leading-tight text-white text-[34px] sm:text-6xl 2xl:text-7xl px-2 sm:px-0">
                      Digital Experiences That Inspire
                    </span>
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mx-auto xl:mx-0 max-w-[560px] text-xl  mb-8 px-2 text-white"
                >
                  We craft premium digital solutions, blending creativity and
                  technology to elevate your brand’s online presence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center xl:justify-start">
                    <Link href="/new-quote">
                      <ShimmerButton className="text-white dark:text-white">
                        Let's discuss your project
                      </ShimmerButton>
                    </Link>
                  </div>
                </motion.p>
              </div>
            </div>

            {/* Visual / Image Block */}
            <Card className="b-0 overflow-hidden rounded-0 2xl:ml-20 max-w-[680px] mx-4 sm:mx-auto ">
              <CardContent className="p-0">
                <img
                  src="/hero-test.jpg"
                  alt="Hero visual"
                  className="object-cover h-full w-full"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
