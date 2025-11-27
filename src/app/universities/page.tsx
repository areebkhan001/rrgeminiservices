import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Partner Universities - RR Gemini Services",
  description:
    "Explore our network of partner universities across Malaysia. We work with leading institutions to provide quality education opportunities.",
};

const universities = [
  { name: "Taylor University", image: "/images/universities/taylor.png" },
  { name: "Sunway University", image: "/images/universities/sunway.png" },
  {
    name: "Asia Pacific University of Technology & Innovation (APU)",
    image: "/images/universities/apu.png",
  },
  { name: "UCSI", image: "/images/universities/ucsi.png" },
  { name: "INTI University", image: "/images/universities/inti.png" },
  { name: "Infrastructure University Kuala Lumpur (IUKL)", image: "/images/universities/iukl.png" },
  { name: "UNITEN", image: "/images/universities/uniten.png" },
  { name: "SEGi University", image: "/images/universities/segi.png" },
  { name: "Lim Kok Wing University", image: "/images/universities/limkokwing.png" },
  { name: "Multimedia University (MMU)", image: "/images/universities/mmu.png" },
  { name: "Asia Metropolitan University", image: "/images/universities/amu.png" },
  { name: "University Tun Abdul Razak (UTAR)", image: "/images/universities/utar.png" },
  { name: "Management Science University (MSU)", image: "/images/universities/msu.png" },
  { name: "City University Malaysia", image: "/images/universities/city.png" },
  { name: "University of Cyberjaya", image: "/images/universities/cyberjaya.png" },
  { name: "UNIMY", image: "/images/universities/unimy.png" },
  { name: "UniTAR (University Tun Abdul Razak)", image: "/images/universities/unitar.png" },
  { name: "MAHSA University", image: "/images/universities/mahsa.png" },
  { name: "Brickfield Asia College (BAC)", image: "/images/universities/bac.png" },
  {
    name: "University College of Aviation Malaysia (UniCAM)",
    image: "/images/universities/unicam.png",
  },
  { name: "Lincoln University Malaysia", image: "/images/universities/lincoln.png" },
  { name: "University Tun Hussein (UTHM)", image: "/images/universities/uthm.png" },
];

export default function UniversitiesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-32 w-96 h-96 hidden dark:block bg-gradient-to-br dark:from-slate-300/50 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 hidden dark:block bg-gradient-to-bl dark:from-slate-300/45 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 hidden dark:block bg-gradient-to-tr dark:from-slate-200/35 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-orange-600 dark:text-orange-400 tracking-wide uppercase">Our Network</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Partner Universities
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-gray-300">
              We collaborate with over 20 leading universities in Malaysia to provide comprehensive
              education opportunities for students.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {/* Clean grid of universities */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {universities.map((university, index) => (
                <FadeIn key={university.name} delay={index * 0.05}>
                  <div className="group relative">
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 touch-manipulation">
                      <div className="flex items-center justify-center h-32 sm:h-40 p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700">
                        <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white text-center leading-tight">
                          {university.name}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200/50 dark:ring-slate-700/50 group-hover:ring-orange-500/50 dark:group-hover:ring-cyan-400/50 transition-all" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Additional Information */}
        <FadeIn>
          <div className="mx-auto mt-32 max-w-2xl text-center">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              Why Choose Our University Partners?
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our partner universities are known for their academic excellence, modern facilities,
              and industry-focused programs. We help students find the perfect match for their
              educational goals and career aspirations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                Contact Us
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-slate-700 hover:text-orange-600 transition-colors">
                Learn about our services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
