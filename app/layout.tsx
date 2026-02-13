import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raj Vaid – The Indian Wolf | AI Fitness & Wellness",
  description: "Experience the future of fitness with Raj Vaid, The Indian Wolf.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="fixed inset-0 bg-wolf-glow pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
