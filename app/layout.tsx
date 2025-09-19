import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankush Tripathi Media & Co.",
  description: "Premium digital solutions, marketing and branding services.",
  openGraph: {
    title: "Ankush Tripathi Media & Co.",
    description: "Premium digital solutions, marketing and branding services.",
    url: "https://atmnc.in",
    images: [
      {
        url: "/og-tag-image.png",
        width: 1200,
        height: 630,
        alt: "Ankush Tripathi Media & Co.",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antiliased bg-[url('/images/fullbg.jpg')] bg-cover bg-center `}
      >
        <Header />
        {children}
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
