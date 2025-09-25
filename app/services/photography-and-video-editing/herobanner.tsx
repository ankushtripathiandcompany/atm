"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UniqueHeroWithSidebar() {
  return (
    <div className=" dark:bg-black mx-auto relative flex justify-center flex-col md:flex-row bg-[url('/images/herobg.jpg')] bg-top bg-cover border-b">
      <div className="bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(0,0,0,1)] w-full flex pt-0 sm:py-16">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-0 sm:px-6 border-none">
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Text Content */}

            <div className="flex justify-center xl:justify-end xl:pl-20 order-2 sm:order-1 px-4 xl:px-0">
              <div className="max-w-[800px] space-y-6 text-center xl:text-left">
                <h1 className="mx-w-sm md:max-w-2xl w-full mx-auto relative z-20 bg-clip-text font-bold text-black dark:text-white text-3xl md:text-4xl xl:text-5xl leading-tight">
                  Stunning Photography & Video Editing
                </h1>
                <p className="mx-auto xl:mx-0 max-w-[560px] text-base sm:text-xl text-muted-foreground mb-14 sm:mb-0 px-4 md:px-0">
                  Capturing stunning visuals with professional editing that
                  elevates your brand’s storytelling impact.
                </p>
              </div>
            </div>

            {/* Visual / Image Block */}
            <Card className="shadow-lg overflow-hidden  2xl:ml-20 max-w-[640px] rounded-none sm:mx-auto order-1 sm:order-2">
              <CardContent className="p-0 rounded-none">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0, duration: 0.4 }}
                >
                  <Image
                    src="/services/photography-and-video-editing.jpg"
                    alt="Hero visual"
                    height="1200"
                    width="1000"
                    className="object-cover h-full w-full rounded-none"
                    priority
                  />
                </motion.p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
