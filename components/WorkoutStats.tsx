"use client";
import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";
export default function WorkoutStats() {
  return (
    <div id="workout" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-12">Wolf Tracking</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass rounded-[40px] p-8 min-h-[400px] bg-zinc-900/50 flex flex-col justify-end">
            <div className="text-6xl font-black text-white tracking-tighter">5.24 <span className="text-2xl text-brand-silver">KM</span></div>
            <div className="text-brand-cyan font-bold uppercase text-xs tracking-[0.2em]">Total Distance</div>
          </div>
          <div className="space-y-8">
            <div className="glass p-8 rounded-[40px] border-l-4 border-brand-cyan">
               <Flame className="text-brand-rose mb-4" />
               <div className="text-4xl font-black text-white">450 <span className="text-lg text-brand-silver">KCAL</span></div>
            </div>
            <button className="w-full py-6 rounded-[40px] bg-brand-cyan text-background font-black uppercase text-sm cyan-glow">Complete Workout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
