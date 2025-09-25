import React from "react";
import HeroBanner from "./herobanner";
import EventGallery from "./slideshow";
const pages = () => {
  return (
    <div>
      <HeroBanner />
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
  );
};

export default pages;
