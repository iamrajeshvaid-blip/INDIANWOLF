"use client";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
export default function MembershipGrid() {
  return (
    <div id="membership" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">The <span className="text-brand-cyan">Alpha</span> Pack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="glass p-10 rounded-[40px] border-brand-cyan border-2 relative">
            <ShieldCheck className="w-12 h-12 mb-6 text-brand-cyan" />
            <h4 className="text-3xl font-black text-white uppercase mb-2">Alpha Pack</h4>
            <div className="text-6xl font-black text-white tracking-tighter mb-8">9<span className="text-brand-silver text-lg">/MO</span></div>
            <button className="w-full py-4 rounded-2xl bg-brand-cyan text-background font-black uppercase text-xs cyan-glow">Go Alpha</button>
          </div>
        </div>
      </div>
    </div>
  );
}
