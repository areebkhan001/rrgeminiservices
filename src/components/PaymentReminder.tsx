'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CreditCard, Shield, Zap, Lock, Sparkles, X } from 'lucide-react';

interface PaymentReminderProps {
  onClose?: () => void;
}

export const PaymentReminder = ({ onClose }: PaymentReminderProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);
  const [isExiting, setIsExiting] = useState(false);

  const disableInteraction = useCallback(() => {
    setShowOverlay(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blocked');
    
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    for (const el of interactiveElements) {
      if (el instanceof HTMLElement) {
        el.style.pointerEvents = 'none';
        el.setAttribute('disabled', 'true');
        el.setAttribute('aria-disabled', 'true');
      }
    }
  }, []);

  const enableInteraction = useCallback(() => {
    document.body.style.overflow = '';
    document.body.classList.remove('blocked');
    
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    for (const el of interactiveElements) {
      if (el instanceof HTMLElement) {
        el.style.pointerEvents = '';
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
      }
    }
  }, []);

  useEffect(() => {
    const disableTimer = setTimeout(disableInteraction, 40000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(disableTimer);
      clearInterval(countdownInterval);
      enableInteraction();
    };
  }, [disableInteraction, enableInteraction]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowOverlay(false);
      onClose?.();
    }, 300);
  };

  const progressPercentage = ((40 - timeLeft) / 40) * 100;

  if (!showOverlay) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-background/95 dark:bg-[#0a0c10]/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4 overflow-hidden"
        style={{ userSelect: 'none' }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Animated Crystalline Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                y: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ 
            scale: isExiting ? 0.95 : 1, 
            opacity: isExiting ? 0 : 1, 
            y: isExiting ? 20 : 0 
          }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative bg-background dark:bg-[#111318] rounded-[2.5rem] p-10 md:p-14 max-w-xl w-full border border-foreground/10 dark:border-white/10 shadow-3xl text-center"
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(40px)',
          }}
        >
          {/* Header Icon */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-fuchsia-600 p-[1px]"
              >
                <div className="w-full h-full rounded-full bg-background dark:bg-[#111318] flex items-center justify-center">
                  <Lock className="w-10 h-10 text-violet-600 dark:text-violet-400" />
                </div>
              </motion.div>
              <div className="absolute -top-2 -right-2">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center border-2 border-background dark:border-[#111318] shadow-lg"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Midnight <span className="text-gradient">Crystal Access</span>
          </h2>
          
          <p className="text-secondary text-lg mb-10 leading-relaxed font-medium">
            Experience the full potential of our premium ecosystem. 
            Upgrade to unlock unrestricted access to our exclusive services.
          </p>

          {/* Countdown & Progress */}
          <div className="bg-foreground/[0.03] dark:bg-white/5 rounded-3xl p-6 mb-10 border border-foreground/5 dark:border-white/5">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold uppercase tracking-widest text-xs">
                <Clock size={14} /> Session Time
              </div>
              <span className="text-sm font-mono text-secondary">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            
            <div className="w-full bg-foreground/10 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 h-full"
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="flex-1 bg-violet-600 hover:bg-violet-500 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-violet-600/20 flex items-center justify-center gap-3"
              onClick={() => window.open('mailto:info@rrgeminiservices.com?subject=Premium%20Upgrade', '_blank')}
            >
              <CreditCard size={20} /> Upgrade Now
            </button>
            <button
              className="px-8 py-5 border border-foreground/10 dark:border-white/10 hover:border-foreground/20 dark:hover:border-white/20 text-foreground font-bold rounded-2xl transition-all hover:bg-foreground/[0.03] dark:hover:bg-white/5"
              onClick={handleClose}
            >
              Maybe Later
            </button>
          </div>

          <p className="mt-8 text-xs text-secondary font-bold uppercase tracking-[0.2em]">
            Secured by RR Gemini Services
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
;