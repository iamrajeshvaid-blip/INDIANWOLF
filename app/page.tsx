"use client";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Target, BarChart3 } from "lucide-react";
import WorkoutStats from "@/components/WorkoutStats";
import DietDashboard from "@/components/DietDashboard";
import MoodAnalyzer from "@/components/MoodAnalyzer";
import MembershipGrid from "@/components/MembershipGrid";
import ShareHowl from "@/components/ShareHowl";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px]" />
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-brand-cyan font-bold tracking-[0.3em] text-sm md:text-base mb-4 uppercase">Unleash Your Potential</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">RAJ VAID <br /><span className="text-brand-cyan text-glow">THE INDIAN WOLF</span></h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="px-8 py-4 bg-brand-cyan text-background font-black rounded-full cyan-glow uppercase">Start My Howl</button>
            <button className="px-8 py-4 glass text-white font-bold rounded-full uppercase">View Journey</button>
          </div>
        </motion.div>
      </section>
      <WorkoutStats />
      <DietDashboard />
      <MoodAnalyzer />
      <MembershipGrid />
      <ShareHowl />
    </main>
  );
}
