"use client";
import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
export default function ShareHowl() {
  return (
    <section className="py-24 px-6 bg-background border-t border-white/5 text-center">
      <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">Share Your <span className="text-brand-cyan italic">Howl</span></h3>
      <div className="flex justify-center space-x-6">
        <button className="p-6 rounded-full glass border-brand-cyan/20 text-brand-cyan"><Instagram size={28} /></button>
        <button className="p-6 rounded-full glass border-brand-cyan/20 text-brand-cyan"><Twitter size={28} /></button>
      </div>
    </section>
  );
}
