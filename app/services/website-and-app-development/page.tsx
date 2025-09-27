"use client";

import React from "react";
import Herobanner from "./herobanner";
import Content from "./content";
import CtaBanner from "@/components/custom/CtaBanner/CtaBanner";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiWordpress,
  SiShopify,
  SiHubspot,
  SiAndroid,
  SiIos,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiWordpress />,
    title: "WordPress",
    href: "https://wordpress.org",
  },
  {
    node: <SiShopify />,
    title: "Shopify",
    href: "https://www.shopify.com",
  },
  {
    node: <SiHubspot />,
    title: "HubSpot",
    href: "https://www.hubspot.com",
  },
  {
    node: <SiAndroid />,
    title: "Android",
    href: "https://www.android.com",
  },
  {
    node: <SiIos />,
    title: "iOS",
    href: "https://www.apple.com/ios",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

const page = () => {
  return (
    <div>
      <Herobanner />
      <div className="relative overflow-hidden block md:hidden pt-8">
        <LogoLoop
          logos={techLogos}
          speed={20}
          direction="left"
          logoHeight={24}
          gap={28}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className="mt-12 sm:mt-16 mb-16">
        <Content />
      </div>
      <div className="max-w-4xl mx-auto mb-0 sm:mb-16">
        <CtaBanner />
      </div>
    </div>
  );
};

export default page;
