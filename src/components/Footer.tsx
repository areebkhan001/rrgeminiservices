"use client";

import Link from "next/link";
import { FadeIn } from "./ui/motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Advisory & Consultancy", href: "/services#advisory" },
    { name: "Trading & Retail", href: "/services#retail" },
    { name: "Student Services", href: "/services#student" },
    { name: "Business Services", href: "/services#business" },
  ],
  support: [
    { name: "Universities", href: "/universities" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-foreground/10 dark:border-white/10 bg-background pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground outline-none">
                RR <span className="text-violet-500">GEMINI</span>
              </span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Empowering businesses and individuals through comprehensive advisory services and global opportunities since 2019.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-lg bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-secondary hover:text-violet-600 dark:hover:text-violet-500 hover:border-violet-500/50 transition-all shadow-sm">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-secondary hover:text-violet-600 dark:hover:text-violet-500 hover:border-violet-500/50 transition-all shadow-sm">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-foreground font-bold mb-6 uppercase text-xs tracking-widest">Our Services</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors flex items-center gap-1 group font-medium">
                    {link.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-foreground font-bold mb-6 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-secondary font-medium">
                <MapPin size={18} className="text-violet-600 dark:text-violet-500 shrink-0" />
                <span>No. 7, Jalan Kesum 24/37A, Seksyen 24, 40300 Shah Alam</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary font-medium">
                <Mail size={18} className="text-violet-600 dark:text-violet-500 shrink-0" />
                <a href="mailto:info@rrgeminiservices.com" className="hover:text-violet-600 dark:hover:text-violet-400">info@rrgeminiservices.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary font-medium">
                <Phone size={18} className="text-violet-600 dark:text-violet-500 shrink-0" />
                <a href="tel:+60172391700" className="hover:text-violet-600 dark:hover:text-violet-400">+60 17 239 1700</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-foreground/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-xs font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} RR Gemini Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-secondary/60 hover:text-violet-600 dark:hover:text-violet-400 text-xs font-bold uppercase tracking-wider transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

