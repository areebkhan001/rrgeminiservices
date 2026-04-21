"use client";

import Link from "next/link";
import { FadeIn } from "./ui/motion";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Universities", href: "/universities" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-foreground/10 dark:border-white/10 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        <Link href="/" className="relative flex items-center gap-2 group">
          <div className="h-10 w-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:rotate-6 transition-transform duration-300">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">
            RR <span className="text-violet-500">GEMINI</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 p-1 bg-foreground/[0.03] dark:bg-white/5 rounded-full border border-foreground/10 dark:border-white/10"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-secondary hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-secondary"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-[90] lg:hidden bg-background/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`p-4 rounded-2xl text-lg font-bold transition-all ${
                  pathname === item.href
                    ? "bg-violet-600 text-white"
                    : "text-secondary hover:bg-foreground/[0.05] hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 p-4 bg-violet-600 text-white rounded-2xl text-center font-black text-lg shadow-lg shadow-violet-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

