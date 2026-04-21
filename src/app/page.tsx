"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, Meteors, SpotlightCard, PremiumCard } from "@/components/ui/motion";
import { PosterGallery } from "@/components/PosterGallery";
import { ArrowRight, BarChart3, GraduationCap, Briefcase, ShoppingBag, Globe2 } from "lucide-react";

const services = [
  {
    title: "Advisory & Consultancy",
    description: "Navigate complex business landscapes with our expert guidance. From strategic planning to financial optimization.",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Student Services",
    description: "Your gateway to global education. Comprehensive support for admissions, visas, and settling in Malaysia and beyond.",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Trading & Retail",
    description: "Exquisite Kashmir handicrafts and high-end garments. Experience the luxury of RAZ KASHMIR in Jonker Walk, Melaka.",
    icon: <ShoppingBag className="w-8 h-8" />,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Business Solutions",
    description: "Bridging local expertise with international opportunities. Scalable solutions for modern entrepreneurs.",
    icon: <Briefcase className="w-8 h-8" />,
    gradient: "from-fuchsia-500 to-pink-500",
  },
];

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden">
      <Meteors number={30} />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow font-medium" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <FadeIn delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-500 dark:text-violet-400 text-sm font-semibold mb-8">
                <Globe2 size={16} />
                Global Business & Education Excellence
              </span>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                Redefining the <br />
                <span className="text-gradient">Future of Service</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">
                RR Gemini Services empowers businesses and individuals through world-class advisory, 
                premium retail experiences, and global educational consulting since 2019.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-violet-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/5 dark:bg-white/5 hover:bg-white/10 text-foreground border border-black/10 dark:border-white/10 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all hover:border-black/20 dark:hover:border-white/20 text-center"
                >
                  Partner With Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-black/[0.03] dark:bg-black/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Excellence Across <span className="text-violet-500">Industry</span>
                </h2>
                <p className="text-secondary text-lg font-medium">
                  We provide a multifaceted platform for growth, bridging the gap between potential and performance.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link href="/services" className="text-violet-600 dark:text-violet-400 hover:text-violet-500 font-semibold flex items-center gap-2 group">
                View All Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <SpotlightCard className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-secondary leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Opportunities */}
      <section className="py-32 relative">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Global Opportunities</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto font-medium">
                Explore premium work and relocation permits across Europe, Asia, and beyond. Your next chapter starts here.
              </p>
            </div>
          </FadeIn>
          
          <PosterGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-wide">
          <PremiumCard className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700 py-16 px-8 md:px-20 text-center rounded-[2rem]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-12 translate-x-12" />
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Ambitions?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Join hundreds of successful businesses and students who have transformed their future with RR Gemini Services.
              </p>
              <Link
                href="/contact"
                className="inline-flex px-10 py-5 bg-white text-violet-600 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Contact Our Experts Now
              </Link>
            </FadeIn>
          </PremiumCard>
        </div>
      </section>
    </main>
  );
}

