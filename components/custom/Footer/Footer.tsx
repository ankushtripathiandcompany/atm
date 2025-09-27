"use client";
import Bottomlinks from "./Bottomlinks";
import Midlinks from "./Midlinks";
import Toptext from "./Toptext";

export default function SiteFooter() {
  return (
    <footer className="bg-[url('/images/herobg.jpg')] bg-top bg-cover bt-1 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/99">
      <div className="bg-[rgba(255,255,255,0.96)] dark:bg-[rgba(0,0,0,0.92)]">
        <div className=" mx-auto px-8 xl:px-20 py-20">
          <Toptext />
          <Midlinks />

          <Bottomlinks />
        </div>
      </div>
    </footer>
  );
}
