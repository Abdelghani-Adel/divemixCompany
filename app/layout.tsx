import MainFooter from "@/components/MainFooter/MainFooter";
import MainHeader from "@/components/MainHeader/MainHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiveMix",
  description: "Created by RTS company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
