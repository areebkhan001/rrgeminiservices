import type { Metadata } from "next";
import { FadeIn, SpotlightCard } from "@/components/ui/motion";
import { PosterGallery } from "@/components/PosterGallery";

export const metadata: Metadata = {
  title: "Our Services - RR Gemini Services",
  description:
    "Explore our comprehensive range of services including business advisory, student consultancy, and retail offerings.",
};

const advisoryServices = [
  {
    title: "Business Consultation",
    description: "Personalized and customized solutions for businesses and individuals",
    details: [
      "Strategic business planning",
      "Market analysis and research",
      "Growth and expansion strategies",
      "Financial modeling and forecasting",
    ],
  },
  {
    title: "Educational Advisory",
    description: "Comprehensive student support for higher education",
    details: [
      "University selection guidance",
      "Application assistance",
      "Visa documentation support",
      "Pre-departure briefings",
    ],
  },
  {
    title: "Takaful Advisory",
    description: "Islamic financial and estate planning services",
    details: [
      "Takaful product consultation",
      "Islamic estate planning",
      "Financial protection strategies",
      "Family Takaful solutions",
    ],
  },
  {
    title: "International Business Matching",
    description: "Connecting local businesses with global opportunities",
    details: [
      "International partner sourcing",
      "Cross-border business facilitation",
      "Project matchmaking",
      "Trade opportunity identification",
    ],
  },
];

const retailServices = [
  {
    title: "RAZ KASHMIR - Jonker Walk",
    description: "Authentic Kashmir handicrafts and textiles",
    details: [
      "Handcrafted Kashmir artifacts",
      "Traditional cotton clothing",
      "Cultural home decor",
      "Artisanal products",
    ],
  },
  {
    title: "Jewelry Collection",
    description: "Exquisite silver jewelry with semi-precious stones",
    details: [
      "Silver jewelry designs",
      "Semi-precious stone settings",
      "Custom jewelry pieces",
      "Traditional ornaments",
    ],
  },
  {
    title: "Premium Textiles",
    description: "High-quality fabrics and traditional garments",
    details: [
      "Pure Pashmina shawls",
      "Kashmir wool products",
      "Traditional garments",
      "Handwoven textiles",
    ],
  },
  {
    title: "Cultural Artifacts",
    description: "Authentic handicrafts from Kashmir Valley",
    details: [
      "Ancient carpets",
      "Traditional art pieces",
      "Cultural decoratives",
      "Heritage collectibles",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 sm:py-24 gap-16 sm:gap-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] hidden dark:block bg-gradient-to-br dark:from-slate-300/50 dark:via-slate-200/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] hidden dark:block bg-gradient-to-bl dark:from-slate-300/45 dark:via-slate-200/25 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 w-[450px] h-[450px] hidden dark:block bg-gradient-to-tr dark:from-slate-200/35 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Advisory & Consultancy Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600 dark:text-cyan-400">
              Advisory & Consultancy
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Professional Business Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Comprehensive advisory services for businesses, students, and individuals, backed by
              years of experience and expertise.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {advisoryServices.map((service) => (
                <FadeIn key={service.title}>
                  <SpotlightCard>
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <dt className="text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                        {service.title}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col gap-4">
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                        <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex gap-x-3">
                              <svg
                                className="h-6 w-5 flex-none text-orange-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <title>Checkmark Icon</title>
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* Trading & Retail Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400">Trading & Retail</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Authentic Cultural Products
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Discover our curated collection of authentic Kashmir handicrafts, textiles, and
              jewelry at our Jonker Walk location in Melaka.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {retailServices.map((service) => (
                <FadeIn key={service.title}>
                  <SpotlightCard>
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <dt className="text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                        {service.title}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col gap-4">
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                        <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex gap-x-3">
                              <svg
                                className="h-6 w-5 flex-none text-orange-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <title>Checkmark Icon</title>
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* Work Opportunities Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl border border-slate-200/50">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-cyan-400">
              Work Opportunities
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Global Career Placement
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              We help connect skilled professionals with exciting opportunities in Azerbaijan, Norway,
              and across Europe. Explore our current openings.
            </p>
          </div>

          <PosterGallery />
        </FadeIn>
      </section>
    </main>
  );
}
