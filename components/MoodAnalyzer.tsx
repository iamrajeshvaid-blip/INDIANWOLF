"use client";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
export default function MoodAnalyzer() {
  return (
    <div id="mood" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">How are you <span className="text-brand-cyan">feeling</span>?</h3>
        <div className="glass p-8 rounded-[40px] text-left border-brand-cyan/20">
           <p className="text-brand-silver leading-relaxed italic mb-8">"Your mind is the strongest muscle in your body."</p>
           <div className="flex items-center space-x-4">
              <input type="text" placeholder="Talk to the Wolf..." className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-cyan" />
              <button className="p-4 bg-brand-cyan text-background rounded-2xl font-black cyan-glow">HOWL</button>
           </div>
        </div>
      </div>
    </div>
  );
}
