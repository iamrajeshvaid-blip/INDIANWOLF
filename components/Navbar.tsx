"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { name: "Journey", href: "#journey" },
  { name: "Workout", href: "#workout" },
  { name: "Nutrition", href: "#nutrition" },
  { name: "Mood", href: "#mood" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <Shield className="w-8 h-8 text-brand-cyan group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tighter text-glow">RAJ VAID</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-brand-silver hover:text-brand-cyan transition-colors">{link.name}</Link>
          ))}
          <button className="px-6 py-2 rounded-full bg-brand-cyan text-background font-bold text-sm cyan-glow">ENTER PORTAL</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-cyan">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>
    </nav>
  );
}
