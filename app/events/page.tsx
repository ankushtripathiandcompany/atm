"use client";

import React from "react";
import HeroBanner from "./herobanner";
import ChromaGrid from "@/components/ChromaGrid";

const page = () => {
  return (
    <div>
      <HeroBanner />
      <div className="">
        <ChromaGrid />
      </div>
    </div>
  );
};

export default page;
