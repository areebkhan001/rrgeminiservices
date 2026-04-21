"use client";

import { FadeIn, Meteors, SpotlightCard, PremiumCard } from "@/components/ui/motion";
import { PosterGallery } from "@/components/PosterGallery";
import { CheckCircle2, BarChart3, GraduationCap, Building2, Globe2, ShoppingBag, Sparkles } from "lucide-react";

const advisoryServices = [
  {
    title: "Business Consultation",
    description: "Strategic roadmaps tailored for individual and corporate growth.",
    icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
    details: [
      "Strategic business planning",
      "Market analysis and research",
      "Growth and expansion strategies",
      "Financial modeling and forecasting",
    ],
  },
  {
    title: "Educational Advisory",
    description: "Your global education path, simplified and supported.",
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    details: [
      "University selection guidance",
      "Application assistance",
      "Visa documentation support",
      "Pre-departure briefings",
    ],
  },
  {
    title: "Property Consultancy",
    description: "Expert real estate insights in Dubai and Malaysia markets.",
    icon: <Building2 className="w-6 h-6 text-fuchsia-400" />,
    details: [
      "Real estate investment advisory",
      "Residential & commercial sales",
      "Property valuation and analysis",
      "Leasing and management",
    ],
  },
  {
    title: "International Business",
    description: "Bridging potential with global partners and trade opportunities.",
    icon: <Globe2 className="w-6 h-6 text-cyan-400" />,
    details: [
      "International partner sourcing",
      "Cross-border facilitation",
      "Project matchmaking",
      "Trade opportunity identification",
    ],
  },
];

const retailServices = [
  {
    title: "RAZ KASHMIR Artisanal",
    description: "Traditional soul meets modern luxury in Jonker Walk.",
    icon: <ShoppingBag className="w-6 h-6 text-violet-400" />,
    details: [
      "Handcrafted Kashmir artifacts",
      "Traditional cotton clothing",
      "Cultural home decor",
      "Artisanal products",
    ],
  },
  {
    title: "Premium Textiles",
    description: "The world's finest wools and handwoven heritage.",
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    details: [
      "Pure Pashmina shawls",
      "Kashmir wool products",
      "Traditional garments",
      "Heritage collectibles",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-background min-h-screen pt-32 pb-20">
      <Meteors number={15} />

      <div className="container-wide relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-violet-600 dark:text-violet-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Solutions Designed for <span className="text-gradient">Impact</span>
            </h1>
            <p className="text-secondary text-lg leading-relaxed font-medium">
              We offer a diverse portfolio of services ranging from high-level business strategy 
              to curated luxury retail, all unified by our commitment to excellence.
            </p>
          </FadeIn>
        </div>

        {/* Advisory Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-foreground whitespace-nowrap">Advisory & Consultancy</h2>
            <div className="h-px bg-foreground/10 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <SpotlightCard>
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10"
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-secondary text-sm mb-6 font-medium">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs text-secondary font-medium">
                            <CheckCircle2 size={14} className="text-violet-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Retail Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-foreground/10 w-full" />
            <h2 className="text-2xl font-bold text-foreground whitespace-nowrap">Trading & Retail</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retailServices.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <PremiumCard>
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10"
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-secondary text-sm mb-6 font-medium">{service.description}</p>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs text-secondary font-medium">
                            <CheckCircle2 size={14} className="text-violet-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </PremiumCard>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Global Opportunities Section */}
        <section>
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Current Opportunities</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto font-medium">
                Discover active work permit pathways and strategic placements across our global network.
              </p>
            </FadeIn>
          </div>
          <PosterGallery />
        </section>
      </div>
    </main>
  );
}

