"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <div className="mx-auto max-w-2xl px-0 md:px-8 bg:red">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative pl-5 sm:pl-0">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <p className="mb-4 font-bold">{item.title}</p>

              <div className="text-base  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Innovative Digital Foundations",
    description: (
      <>
        <p>
          We build high-performing websites and apps tailored for Indian
          businesses and global audiences alike. From fast-loading pages to
          secure architectures, every project is designed to handle scale,
          multilingual needs, and diverse user behaviors. Our focus is on
          creating seamless experiences that help brands thrive in competitive
          markets.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "Tailored for Growth",
    description: (
      <>
        <p>
          We go beyond code to design products that drive measurable business
          outcomes. By combining responsive layouts, powerful integrations, and
          future-ready tech stacks, we ensure your digital presence grows with
          your goals. Our solutions help Indian brands reach international
          standards with ease and confidence.
        </p>
      </>
    ),
  },
];
