'use client';

import { useEffect, useState } from 'react';

export const PaymentReminder = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const disableInteraction = () => {
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
    };

    const enableInteraction = () => {
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
    };

    // Start timer for disabling functionality
    const timer = setTimeout(disableInteraction, 60000); // 60 seconds

    // Cleanup function
    return () => {
      clearTimeout(timer);
      enableInteraction();
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
      style={{ userSelect: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg p-6 max-w-md mx-auto text-white shadow-2xl border border-neutral-700">
        <h2 className="text-xl font-semibold mb-4 text-center">⚠️ Access Restricted</h2>
        <div className="space-y-4">
          <p className="text-neutral-300">
            Preview period has ended. To restore full access to RR Gemini Services
            and continue using all features, hosting payment is required.
          </p>
          <div className="bg-neutral-800/50 p-4 rounded-md">
            <p className="text-sm text-neutral-400 space-y-2">
              <span className="block">• Site functionality has been restricted</span>
              <span className="block">• Preview period: Expired</span>
              <span className="block">• Hosting fees pending</span>
              <span className="block text-yellow-500">• Required payment: $100</span>
            </p>
          </div>
          <div className="text-sm space-y-2">
            <p className="text-neutral-400">
              To restore access immediately, please contact the administrator to complete the hosting payment.
            </p>
            <p className="text-yellow-500/80">
              Note: All site functionality is disabled until payment is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};