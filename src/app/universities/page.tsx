import { Metadata } from "next";
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
    <main className="flex min-h-screen flex-col items-center py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Network</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partner Universities
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              We collaborate with over 20 leading universities in Malaysia to provide comprehensive
              education opportunities for students.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {/* Grid of universities */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3">
              {universities.map((university, index) => (
                <FadeIn key={university.name} delay={index * 0.1}>
                  <div className="group relative">
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-white border-2 border-blue-200 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-center h-full p-4">
                        <div className="relative h-48 w-48">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-semibold text-gray-900 text-center">
                              {university.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-blue-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                        <div className="relative">
                          <h3 className="text-sm font-medium text-gray-900">{university.name}</h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Click to learn more about our partnership
                          </p>
                        </div>
                      </div>
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
            <h3 className="text-xl font-bold tracking-tight text-gray-900">
              Why Choose Our University Partners?
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our partner universities are known for their academic excellence, modern facilities,
              and industry-focused programs. We help students find the perfect match for their
              educational goals and career aspirations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Contact Us
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                Learn about our services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
