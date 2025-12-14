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
    <FadeIn className="fixed top-0 left-0 right-0 z-[100]">
      <header className="border-b-2 border-gray-200/60 dark:border-gray-700/60 bg-gray-50/95 dark:bg-gray-900/95 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl relative group py-1.5">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 lg:px-8 relative"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/contact" className="-m-1.5 p-1.5 group/logo">
              <img 
                src="/main-logo.png" 
                alt="RR GEMINI SERVICES" 
                className="h-16 w-auto transition-all duration-300 ease-out dark:brightness-0 dark:invert" 
              />
            </Link>
          </div>
          
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
              className="relative flex items-center gap-2 px-2 py-1 rounded-full bg-[rgb(var(--card-bg))]/80 backdrop-blur-md border-2 border-[rgb(var(--border-color))]/50 shadow-[2px_2px_0_rgba(var(--accent-primary),0.15)]"
              aria-label="Primary"
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated background indicator */}
              <div
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-[calc(100%-6px)] bg-[rgb(var(--accent-primary))]/25 backdrop-blur-sm border border-[rgb(var(--accent-primary))]/50 rounded-full will-change-transform" 
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
                  className={`relative z-10 inline-flex items-center px-4 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500 rounded-full ${
                    pathname === item.href 
                      ? 'text-[rgb(var(--accent-primary))] font-bold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[rgb(var(--card-bg))] border-2 border-[rgb(var(--border-color))] shadow-[2px_2px_0_rgba(var(--accent-primary),0.2)] text-[rgb(var(--text-primary))] hover:text-[rgb(var(--accent-primary))] hover:border-[rgb(var(--accent-primary))] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-primary))]/50"
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

        {/* Mobile menu - Right-side dropdown */}
        <div className="lg:hidden relative">
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/30 z-[150] transition-opacity duration-200"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
            />
          )}
          {isMenuOpen && (
            <div className="fixed top-[88px] right-4 z-[200] w-64 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-[4px_4px_0_rgba(150,150,150,0.2)] overflow-hidden animate-in slide-in-from-top-2 duration-200">
              <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-3.5 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 touch-manipulation transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                  className="w-full text-left px-5 py-3.5 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 touch-manipulation flex items-center gap-3 transition-colors"
                >
                  {theme === 'light' ? (
                    <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><title>Moon</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>Dark Mode</>
                  ) : (
                    <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><title>Sun</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>Light Mode</>
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
