"use client";

import React from "react";
import HeroBanner from "./herobanner";
import EventGallery from "./slideshow";

import MetallicPaint, {
  parseLogoImage,
} from "@/components/custom/MetallicPaint/MetallicPaint";
import { useState, useEffect } from "react";

import { MediaModal } from "@/components/custom/MediaModal/MediaModal";
import logo from "@/public/favicon.svg";

const pages = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div>
      <HeroBanner />

      <div className=" grid-cols-3 gap-4 p-8 hidden">
        <MediaModal imgSrc="/services/digital-marketing-full.jpg" />
      </div>

      <div style={{ width: "100%", height: "100vh" }}>
        <MetallicPaint
          imageData={imageData ?? new ImageData(1, 1)}
          params={{
            edge: 2,
            patternBlur: 0.005,
            patternScale: 2,
            refraction: 0.015,
            speed: 0.3,
            liquid: 0.07,
          }}
        />
      </div>

      <div className="hidden">
        <EventGallery
          events={[
            {
              id: "wedding",
              name: "Wedding Ceremony",
              images: [
                {
                  src: "https://source.unsplash.com/random/1920x1080",
                  alt: "Wedding Hall",
                },
                {
                  src: "https://source.unsplash.com/random/1920x1080",
                  alt: "Bride & Groom",
                },
              ],
            },
            {
              id: "corporate",
              name: "Corporate Event",
              images: [
                {
                  src: "https://source.unsplash.com/random/1920x1080",
                  alt: "Conference Room",
                },
                {
                  src: "https://source.unsplash.com/random/1920x1080",
                  alt: "Networking",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default pages;
