"use client";

import { FadeIn, Meteors, SpotlightCard } from "@/components/ui/motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, School } from "lucide-react";

const universities = [
  { name: "Taylor University" },
  { name: "Sunway University" },
  { name: "Asia Pacific University (APU)" },
  { name: "UCSI University" },
  { name: "INTI International University" },
  { name: "IUKL" },
  { name: "UNITEN" },
  { name: "SEGi University" },
  { name: "Lim Kok Wing University" },
  { name: "Multimedia University (MMU)" },
  { name: "Asia Metropolitan University" },
  { name: "UTAR" },
  { name: "MSU" },
  { name: "City University Malaysia" },
  { name: "University of Cyberjaya" },
  { name: "UNIMY" },
  { name: "UniTAR" },
  { name: "MAHSA University" },
  { name: "Brickfield Asia College (BAC)" },
  { name: "UniCAM" },
  { name: "Lincoln University" },
  { name: "UTHM" },
];

export default function UniversitiesPage() {
  return (
    <main className="relative bg-background min-h-screen pt-32 pb-20 overflow-hidden">
      <Meteors number={20} />

      <div className="container-wide relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-violet-600 dark:text-violet-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Education Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Our Partner <span className="text-gradient">Institutions</span>
            </h1>
            <p className="text-secondary text-lg leading-relaxed font-medium">
              We collaborate with Malaysia's most prestigious universities to ensure our 
              students receive world-class education and globally recognized qualifications.
            </p>
          </FadeIn>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
          {universities.map((uni, idx) => (
            <FadeIn key={uni.name} delay={idx * 0.05}>
              <SpotlightCard className="h-full flex flex-col justify-center items-center py-10 px-6 text-center transition-colors group">
                <div className="w-12 h-12 rounded-full bg-violet-600/10 dark:bg-violet-600/20 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  <School size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {uni.name}
                </h3>
                <div className="mt-6 flex items-center gap-1 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-background border border-foreground/10 p-12 md:p-20 text-center"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Why Study in Malaysia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto mb-12">
              <div>
                <h4 className="text-violet-600 dark:text-violet-400 font-bold mb-3 flex items-center gap-2">
                  <GraduationCap size={20} /> Quality Education
                </h4>
                <p className="text-secondary text-sm font-medium">QS ranked universities with globally recognized degree programs and pathways.</p>
              </div>
              <div>
                <h4 className="text-violet-600 dark:text-violet-400 font-bold mb-3 flex items-center gap-2">
                   Affordable Living
                </h4>
                <p className="text-secondary text-sm font-medium">High standard of living with relatively low tuition fees and accommodation costs.</p>
              </div>
              <div>
                <h4 className="text-violet-600 dark:text-violet-400 font-bold mb-3 flex items-center gap-2">
                   Global Exposure
                </h4>
                <p className="text-secondary text-sm font-medium">A vibrant, multicultural environment that prepares you for an international career.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1"
              >
                Apply Now
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/5 dark:bg-white/5 hover:bg-white/10 text-foreground border border-black/10 dark:border-white/10 rounded-xl font-bold backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                Our Support Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

