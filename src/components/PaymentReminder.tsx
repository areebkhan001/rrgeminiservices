'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CreditCard, Shield, Zap } from 'lucide-react';

interface PaymentReminderProps {
  onClose?: () => void;
}

export const PaymentReminder = ({ onClose }: PaymentReminderProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);
  const [isExiting, setIsExiting] = useState(false);

  const disableInteraction = useCallback(() => {
    setShowOverlay(true);
    // Disable scrolling and add blocked class
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blocked');
    
    // Disable all interactive elements
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
    // Start timer for disabling functionality
    const disableTimer = setTimeout(disableInteraction, 40000); // 40 seconds

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup function
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
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-gradient-to-br from-black/95 via-neutral-900/90 to-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4"
        style={{ userSelect: 'none' }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => {
            const x = (i * 37) % 100 - 50;
            const y = (i * 53) % 100 - 50;
            const duration = 3 + (i % 5);
            const delay = (i % 10) * 0.2;
            const left = (i * 17) % 100;
            const top = (i * 23) % 100;
            const particleId = `particle-${left}-${top}-${duration}`;
            
            return (
              <motion.div
                key={particleId}
                className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
                animate={{
                  x: [0, x],
                  y: [0, y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay,
                }}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ 
            scale: isExiting ? 0.9 : 1, 
            opacity: isExiting ? 0 : 1, 
            y: isExiting ? 20 : 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: isExiting ? 0.3 : 0.6 
          }}
          className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 max-w-lg mx-auto text-white shadow-2xl border border-neutral-700/50 backdrop-blur-sm"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-yellow-500/20 blur-xl -z-10" />
          
          {/* Header with icon */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-blue-500 flex items-center justify-center"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold">!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Title with typing effect */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent"
          >
            🚨 Premium Access Required
          </motion.h2>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 mb-6 border border-red-500/30"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="text-lg font-mono text-red-400">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-neutral-700 rounded-full h-2 mb-2">
              <motion.div
                className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <p className="text-center text-xs text-red-300">
              {timeLeft > 0 ? 'Full access available' : 'Access restricted'}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-neutral-300 text-center leading-relaxed">
              Your preview session is about to expire. Upgrade to{' '}
              <span className="font-semibold text-yellow-400">Pro Access</span> to continue using all premium features.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 my-6">
              {[
                { icon: Zap, text: 'Real-time Booking', color: 'text-yellow-400' },
                { icon: Shield, text: 'Secure Payments', color: 'text-blue-400', id: 'secure' },
                { icon: CreditCard, text: 'Easy Checkout', color: 'text-green-400', id: 'checkout' },
                { icon: Clock, text: '24/7 Support', color: 'text-purple-400', id: 'support' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-neutral-800/50"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm text-neutral-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 p-4 rounded-lg border border-yellow-500/30"
            >
              <div className="text-center">
                <p className="text-sm text-neutral-400 mb-1">Upgrade Price</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-yellow-400">$100</span>
                  <span className="text-sm text-neutral-400">/month</span>
                </div>
                <p className="text-xs text-green-400 mt-1">✨ 30-day money-back guarantee</p>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex space-x-3 mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('mailto:vercel@vercel.com?subject=Upgrade%20Request', '_blank')}
              >
                <CreditCard className="w-4 h-4" />
                <span>Upgrade Now</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-all duration-200"
                onClick={handleClose}
              >
                ✕
              </motion.button>
            </motion.div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-xs text-center text-neutral-500 mt-4"
            >
              Contact Your team for enterprise solutions and custom pricing
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};