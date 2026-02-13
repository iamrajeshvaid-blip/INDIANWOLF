import { Shield } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-brand-cyan" />
          <span className="font-bold tracking-tighter text-glow">THE INDIAN WOLF</span>
        </div>
        <div className="text-sm text-brand-silver/50 mt-4 md:mt-0">© {new Date().getFullYear()} Raj Vaid. All rights reserved.</div>
      </div>
    </footer>
  );
}
