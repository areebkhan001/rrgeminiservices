"use client";

import Link from "next/link";
import { FadeIn } from "./ui/motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Universities", href: "/universities" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <FadeIn className="fixed top-0 left-0 right-0 z-50">
      <header className="border-b border-orange-600 bg-orange-500 shadow-lg relative">
        {/* Blue glow effect */}
        <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent pointer-events-none" />
        
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="bg-white rounded-full p-0.5 shadow-2xl ring-4 ring-orange-400/30">
                <img src="/main-logo.png" alt="RR GEMINI SERVICES" className="h-16 w-auto" />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-white/80 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "" : "hidden"}`}>
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-orange-500 px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <span className="text-lg font-bold text-orange-600">RR GEMINI</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/20">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </FadeIn>
  );
};
