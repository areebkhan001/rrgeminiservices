'use client';

import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-2xl">
      <div className="relative flex flex-col items-center">
        {/* Crystalline Background Glow */}
        <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative px-10 py-12 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl flex flex-col items-center"
        >
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-violet-500"
            >
              <Loader2 size={48} className="stroke-[1.5]" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet-400"
            >
              <Sparkles size={16} />
            </motion.div>
          </div>
          
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
            RR <span className="text-violet-500">GEMINI</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-1 w-24 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent"
              />
            </div>
          </div>
        </motion.div>
        
        <p className="mt-8 text-secondary text-sm font-bold uppercase tracking-[0.3em] animate-pulse">
          Initializing Crystal Excellence
        </p>
      </div>
    </div>
  );
}
