"use client";

import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";
import type { Metadata } from "next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import "@/styles/main.min.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 600,
      easing: "ease-in",
      // once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
