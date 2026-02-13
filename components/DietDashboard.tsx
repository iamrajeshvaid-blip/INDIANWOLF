"use client";
import { motion } from "framer-motion";
export default function DietDashboard() {
  return (
    <div id="nutrition" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-16">Tonight We <span className="text-brand-cyan italic">Feast</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass rounded-[40px] p-10">
            <div className="text-7xl font-black text-white tracking-tighter mb-4">2,450</div>
            <div className="text-brand-silver font-bold uppercase tracking-widest text-xs">Calories Consumed</div>
          </div>
          <div className="md:col-span-4 glass rounded-[40px] bg-zinc-800/50 p-8 flex flex-col justify-end text-left">
            <h4 className="text-3xl font-black text-white mb-2 leading-tight">KETO STEAK WITH ASPARAGUS</h4>
            <p className="text-brand-silver text-sm">Optimized for rapid recovery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
