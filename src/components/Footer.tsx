import Link from "next/link";
import { FadeIn } from "./ui/motion";

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
  company: [
    { name: "201903164676 (SA0519682-P)", href: "#" },
    { name: "No. 7, Jalan Kesum 24/37A", href: "#" },
    { name: "Seksyen 24, 40300 Shah Alam", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  social: [
    {
      name: "Email",
      href: "mailto:info@rrgeminiservices.com",
      icon: (props: React.ComponentProps<"svg">) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true">
          <title>Email icon</title>
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "tel:+60112337911",
      icon: (props: React.ComponentProps<"svg">) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true">
          <title>Phone icon</title>
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <FadeIn>
      <footer className="bg-black/50 backdrop-blur-lg" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="block">
                <img src="/main-logo.png" alt="RR GEMINI SERVICES" className="h-16 w-auto" />
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Your trusted partner in education, business, and retail services.
              </p>
              <div className="flex space-x-6">
                {footerLinks.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                  <ul className="mt-6 space-y-4">
                    {footerLinks.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                  <ul className="mt-6 space-y-4">
                    {footerLinks.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul className="mt-6 space-y-4">
                    {footerLinks.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul className="mt-6 space-y-4">
                    {footerLinks.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} RR Gemini Services. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Developed by</span>
                <a
                  href="https://github.com/talha1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="mx-1">·</span>
                <a
                  href="https://www.linkedin.com/in/talha1230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="ml-1 font-medium">talha1230</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
};
