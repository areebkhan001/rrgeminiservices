"use client";

import Link from "next/link";
import { FadeIn } from "./ui/motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Universities", href: "/universities" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const animationFrameRef = useRef<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const calculateIndicatorPosition = (element: HTMLElement) => {
      if (!navRef.current) return null;
      
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = element.getBoundingClientRect();
      
      return {
        left: linkRect.left - navRect.left,
        width: linkRect.width
      };
    };

    const updateIndicatorPosition = (position: { left: number; width: number } | null) => {
      if (!position) return;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setIndicatorStyle(position);
      });
    };

    const updateActiveIndicator = () => {
      if (!navRef.current || isHovering) return;

      const activeLink = navRef.current.querySelector(`[href="${pathname}"]`) as HTMLElement;
      if (activeLink) {
        const position = calculateIndicatorPosition(activeLink);
        updateIndicatorPosition(position);
      }
    };

    // Initial update and on path change
    updateActiveIndicator();
    
    // Update on resize
    window.addEventListener('resize', updateActiveIndicator);
    
    return () => {
      window.removeEventListener('resize', updateActiveIndicator);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pathname, isHovering]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovering(true);
    const target = e.currentTarget;
    
    if (!navRef.current) return;
    
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width
      });
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    if (!navRef.current) return;
    
    const activeLink = navRef.current.querySelector(`[href="${pathname}"]`) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width
        });
      });
    }
  };

  return (
    <FadeIn className="fixed top-0 left-0 right-0 z-40">
      <header className="border-b border-white/10 bg-gradient-to-r from-orange-500/95 via-orange-600/95 to-orange-500/95 dark:from-blue-900/95 dark:via-blue-800/95 dark:to-blue-900/95 shadow-lg backdrop-blur-xl relative overflow-hidden group">
        {/* Animated background orbs for color mixing effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        {/* Ribbon shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none overflow-hidden">
          <div className="absolute inset-y-0 w-32 -left-32 group-hover:left-[calc(100%+32px)] transition-[left] duration-[2000ms] ease-in-out bg-gradient-to-r from-transparent via-white/60 dark:via-cyan-400/60 to-transparent -skew-x-12" />
        </div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/contact" className="-m-1.5 p-1.5 group/logo relative">
              <div className="absolute inset-0 bg-white/50 dark:bg-cyan-400/50 rounded-full blur-2xl opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500" />
              <div className="absolute inset-0 bg-white dark:bg-cyan-500/40 rounded-full opacity-40 group-hover/logo:opacity-60 transition-opacity duration-500" />
              <img 
                src="/main-logo.png" 
                alt="RR GEMINI SERVICES" 
                className="h-20 w-auto relative z-10 transition-all duration-500 ease-out group-hover/logo:scale-125 drop-shadow-[0_5px_20px_rgba(255,255,255,0.6)] group-hover/logo:drop-shadow-[0_8px_30px_rgba(255,255,255,0.8)] dark:brightness-0 dark:invert" 
              />
            </Link>
          </div>
          
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/90 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>Moon Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>Sun Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4 relative z-10">
            <nav
              ref={navRef}
              className="relative flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 dark:bg-cyan-500/20 backdrop-blur-sm ring-1 ring-white/20 dark:ring-cyan-400/30 shadow-inner"
              aria-label="Primary"
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated background indicator */}
              <div
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-[calc(100%-6px)] bg-white/20 dark:bg-cyan-400/40 rounded-full will-change-transform shadow-[0_0_15px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.6)]" 
                style={{
                  left: `${indicatorStyle.left + 4}px`,
                  width: `${indicatorStyle.width}px`,
                  transform: 'translateY(-50%)',
                  transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                aria-hidden="true"
              />
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={handleMouseEnter}
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wide text-white/90 dark:text-cyan-50 transition-all duration-200 ease-out hover:text-white dark:hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/85 dark:focus-visible:ring-cyan-400/85 rounded-full"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/10 dark:bg-cyan-500/20 backdrop-blur-sm ring-1 ring-white/20 dark:ring-cyan-400/30 text-white/90 dark:text-cyan-50 hover:text-white hover:bg-white/20 dark:hover:bg-cyan-400/30 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/85 dark:focus-visible:ring-cyan-400/85"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>Moon Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>Sun Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu - Dropdown style */}
        <div className="lg:hidden">
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-200"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
            />
          )}
          {isMenuOpen && (
            <div className="fixed top-[88px] left-0 right-0 z-[70] mx-4 bg-orange-500 dark:bg-blue-900 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-5 duration-300">
              <div className="divide-y divide-white/20">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-4 text-lg font-semibold text-white hover:bg-orange-600 dark:hover:bg-blue-800 active:bg-orange-700 dark:active:bg-blue-700 touch-manipulation transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                  className="w-full text-left px-6 py-4 text-lg font-semibold text-white hover:bg-orange-600 dark:hover:bg-blue-800 active:bg-orange-700 dark:active:bg-blue-700 touch-manipulation flex items-center gap-3 transition-colors"
                >
                  {theme === 'light' ? (
                    <><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><title>Moon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>Dark Mode</>
                  ) : (
                    <><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><title>Sun</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>Light Mode</>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </FadeIn>
  );
};
