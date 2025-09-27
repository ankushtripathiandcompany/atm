"use client";

import React from "react";
import HeroBanner from "./herobanner";
import MetallicPaint, { parseLogoImage } from "@/components/MetallicPaint";
import { useState, useEffect } from "react";
import ChromaGrid from "@/components/ChromaGrid";

const page = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch("/apple.svg");
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        console.log(parsedData);
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
      <div className="">
        <ChromaGrid />
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
    </div>
  );
};

export default page;
