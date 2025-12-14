"use client";

import { useState } from "react";
import { FadeIn, Meteors } from "@/components/ui/motion";

const officeLocation = {
  address: "No. 7, Jalan Kesum 24/37A, Seksyen 24",
  city: "40300 Shah Alam",
  country: "Malaysia",
  phone1: "+6011-23377911",
  phone2: "+6017-2391700",
  email: "info@rrgeminiservices.com",
  registration: "RR GEMINI SERVICE (201903164676)",
  regNumber: "SA0519682-P",
};

const retailLocation = {
  address: "RAZ KASHMIR",
  location: "Jonker Walk",
  city: "Melaka",
  country: "Malaysia",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center py-24 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-cyan-400">Contact Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              We're here to help with all your business, education, and retail needs. Reach out to
              us and we'll respond as soon as possible.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-cyan-500 px-6 pb-9 pt-8 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white">Main Office</h3>
              <dl className="mt-4 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd>{officeLocation.address}</dd>
                  <dd>{officeLocation.city}</dd>
                  <dd>{officeLocation.country}</dd>
                </div>
                <div>
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <a href={`tel:${officeLocation.phone1}`} className="hover:text-blue-600 dark:hover:text-cyan-400">
                      {officeLocation.phone1}
                    </a>
                  </dd>
                  <dd>
                    <a href={`tel:${officeLocation.phone2}`} className="hover:text-blue-600 dark:hover:text-cyan-400">
                      {officeLocation.phone2}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href={`mailto:${officeLocation.email}`} className="hover:text-blue-600 dark:hover:text-cyan-400">
                      {officeLocation.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <Meteors number={20} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-gray-600 px-6 pb-9 pt-8 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white">Retail Store</h3>
              <dl className="mt-4 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                <div>
                  <dt className="sr-only">Store name and address</dt>
                  <dd>{retailLocation.address}</dd>
                  <dd>{retailLocation.location}</dd>
                  <dd>{retailLocation.city}</dd>
                  <dd>{retailLocation.country}</dd>
                </div>
              </dl>
              <Meteors number={20} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-gray-600 px-6 pb-9 pt-8 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white">Registration</h3>
              <dl className="mt-4 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                <div>
                  <dt className="sr-only">Business registration</dt>
                  <dd>{officeLocation.registration}</dd>
                  <dd>{officeLocation.regNumber}</dd>
                </div>
              </dl>
              <Meteors number={20} />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-gray-600 px-6 pb-9 pt-8 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
              <dl className="mt-4 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                <div>
                  <dt>Monday - Friday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div>
                  <dt>Saturday</dt>
                  <dd>10:00 AM - 4:00 PM</dd>
                </div>
                <div>
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
              <Meteors number={20} />
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn>
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl px-4 sm:px-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 px-4 sm:px-6 py-6 sm:py-8 shadow-lg sm:px-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 gap-x-6 sm:gap-x-8 gap-y-5 sm:gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-3.5 py-3 text-base text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 touch-manipulation"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-2 border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400 touch-manipulation"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-2 border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400 touch-manipulation"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full rounded-md border-2 border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400 touch-manipulation"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-md border-2 border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400 touch-manipulation"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-700 dark:to-gray-800 px-4 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:from-blue-500 hover:to-blue-600 dark:hover:from-gray-600 dark:hover:to-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-gray-500 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {submitStatus === "success" && (
                  <p className="mt-4 text-sm text-green-400">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-4 text-sm text-red-400">
                    There was an error sending your message. Please try again later.
                  </p>
                )}
              </form>
              <Meteors number={20} />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
