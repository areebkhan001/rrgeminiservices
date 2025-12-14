import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, Meteors, SpotlightCard } from "@/components/ui/motion";
import { PosterGallery } from "@/components/PosterGallery";

export const metadata: Metadata = {
  title: "RR Gemini Services - Business Advisory & Trading",
  description: "Your trusted partner in education, business, and retail services.",
};

const services = [
  {
    title: "Advisory & Consultancy",
    description:
      "Expert guidance for students, businesses, and individuals. From higher education to financial planning.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <title>Advisory Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Student Services",
    description:
      "Comprehensive support for students seeking higher education opportunities in Malaysia and abroad.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <title>Education Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    title: "Trading & Retail",
    description:
      "Quality Kashmir handicrafts, garments, and jewelry through our brand RAZ KASHMIR in Jonker Walk, Melaka.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <title>Shopping Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    title: "Business Services",
    description:
      "Connecting local businesses with international opportunities and providing strategic business solutions.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <title>Business Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative isolate pt-14 w-full overflow-hidden">
        {/* Decorative manga-style lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-32 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-orange-400/60 dark:to-gray-700 animate-slideRight" />
          <div className="absolute top-48 right-0 w-40 h-1 bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-orange-400/60 dark:to-gray-700 animate-slideLeft" />
          <div className="absolute bottom-32 left-1/4 w-24 h-0.5 bg-gradient-to-r from-orange-300/40 dark:from-gray-600/40 to-transparent opacity-60 animate-pulse" />
          <div className="absolute top-1/2 right-12 w-2 h-20 bg-gradient-to-b from-gray-400/40 to-transparent opacity-40" />
          <div className="absolute top-1/3 left-12 w-2 h-16 bg-gradient-to-t from-gray-400/40 to-transparent opacity-40" />
        </div>

        


        <FadeIn>
          <div className="py-20 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Your Trusted Partner in Business Success
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300 px-2">
                  Empowering businesses and individuals through comprehensive advisory services,
                  quality retail products, and educational consulting since 2019.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
                  <Link
                    href="/services"
                    className="w-full sm:w-auto rounded-md bg-orange-600 dark:bg-gray-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:focus-visible:outline-gray-500 touch-manipulation text-center"
                  >
                    Our Services
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto text-base font-semibold leading-6 text-gray-900 dark:text-white py-3 text-center touch-manipulation">
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Manga-style section divider */}
      <div className="w-full py-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-orange-400/50 dark:to-gray-700" />
            <div className="w-3 h-3 rotate-45 bg-orange-500 dark:bg-gray-600" />
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-gray-300 dark:via-gray-700 to-orange-400/50 dark:to-gray-700" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
        
        <div className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Comprehensive solutions for your business and educational needs
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.title}>
              <SpotlightCard>
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl px-5 sm:px-6 pb-6 sm:pb-8 pt-6 sm:pt-8 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 touch-manipulation border-l-4 border-orange-400/70">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-15">
                    <div className="absolute top-2 right-2 w-12 h-0.5 bg-gray-400 transform rotate-45" />
                    <div className="absolute top-2 right-2 w-0.5 h-12 bg-gray-400 transform rotate-45" />
                  </div>
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-orange-400/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-center gap-x-3 sm:gap-x-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/30 dark:from-gray-600/20 dark:to-gray-700/30 text-orange-600 dark:text-gray-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 tracking-tight text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
        </div>
      </div>

      {/* Manga-style section divider */}
      <div className="w-full py-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rotate-45 bg-orange-500 dark:bg-gray-600" />
            <div className="flex-1 h-1 bg-gradient-to-r from-gray-300 via-orange-400/50 dark:via-gray-700 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-orange-500 dark:bg-gray-600" />
            <div className="flex-1 h-1 bg-gradient-to-l from-gray-300 via-orange-400/50 dark:via-gray-700 to-transparent" />
            <div className="w-3 h-3 rotate-45 bg-orange-500 dark:bg-gray-600" />
          </div>
        </div>
      </div>

      {/* Work Opportunities Section */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full overflow-hidden">
        
        <div className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Global Work Opportunities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Explore exciting career opportunities across Europe and beyond
            </p>
          </div>
        </FadeIn>

        <PosterGallery />
        </div>
      </div>
    </main>
  );
}
