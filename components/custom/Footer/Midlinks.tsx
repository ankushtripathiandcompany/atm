import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const Midlinks = () => {
  return (
    <div className="flex justify-between mb-20 flex-col md:flex-row">
      {/* Brand + Newsletter */}
      <div className="space-y-4">
        <ShimmerButton className="shadow-2xl min-w-[220px] mx-auto sm:mx-0">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            +91 8699 81 2196
          </span>
        </ShimmerButton>
        <ShimmerButton className="shadow-2xl min-w-[220px] mx-auto sm:mx-0">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            contact@atm.online
          </span>
        </ShimmerButton>
        <p className="min-w-[220px] text-center mt-8 text-black dark:text-white">
          Bhopal, India 🇮🇳
        </p>
      </div>

      {/* Navigation */}
      <div>
        <ul className="space-y-4 text-md text-black dark:text-white">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#docs">Documentation</Link>
          </li>
          <li>
            <Link href="#integrations">Integrations</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-4 text-md text-black dark:text-white">
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#careers">Careers</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="max-w-min inline">
        <ul className="space-y-4 text-md text-black dark:text-white">
          <li>
            <Link href="#help" className="whitespace-nowrap">
              FACEBOOK
            </Link>
          </li>
          <li>
            <Link href="#terms" className="whitespace-nowrap">
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link href="#privacy" className="whitespace-nowrap">
              TWITTER
            </Link>
          </li>
          <li>
            <Link href="#status" className="whitespace-nowrap">
              LINKEDIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Midlinks;
