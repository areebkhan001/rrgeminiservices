"use client";

import { useState } from "react";
import { FadeIn, Meteors, SpotlightCard, PremiumCard } from "@/components/ui/motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Building2 } from "lucide-react";

const officeLocation = {
  address: "No. 7, Jalan Kesum 24/37A, Seksyen 24",
  city: "40300 Shah Alam, Selangor",
  country: "Malaysia",
  phone1: "+6011-23377911",
  phone2: "+6017-2391700",
  email: "info@rrgeminiservices.com",
};

const retailLocation = {
  name: "RAZ KASHMIR",
  address: "Jonker Walk, Melaka, Malaysia",
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="relative bg-background min-h-screen pt-32 pb-20 overflow-hidden">
      <Meteors number={15} />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-violet-600 dark:text-violet-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Let's Build Your <span className="text-gradient">Success Together</span>
            </h1>
            <p className="text-secondary text-lg leading-relaxed font-medium">
              Whether you're a student, a business owner, or an enthusiast of fine crafts, 
              we're ready to provide the specialized support you need.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={0.1}>
              <SpotlightCard className="p-8 border-foreground/5 dark:border-white/5 bg-foreground/2 dark:bg-white/2">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-violet-600/10 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 rounded-xl">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Main Office</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4 font-medium">
                      {officeLocation.address}<br />
                      {officeLocation.city}, {officeLocation.country}
                    </p>
                    <div className="space-y-2">
                      <a href={`tel:${officeLocation.phone1}`} className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors text-sm font-semibold">
                        <Phone size={16} /> {officeLocation.phone1}
                      </a>
                      <a href={`mailto:${officeLocation.email}`} className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors text-sm font-semibold text-wrap break-all">
                        <Mail size={16} /> {officeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <SpotlightCard className="p-8 border-foreground/5 dark:border-white/5 bg-foreground/2 dark:bg-white/2">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Retail Experience</h3>
                    <p className="text-secondary text-sm leading-relaxed font-medium">
                      <strong className="text-foreground">{retailLocation.name}</strong><br />
                      {retailLocation.address}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <SpotlightCard className="p-8 border-foreground/5 dark:border-white/5 bg-foreground/2 dark:bg-white/2">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-fuchsia-600/10 dark:bg-fuchsia-600/20 text-fuchsia-600 dark:text-fuchsia-400 rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                    <div className="space-y-2 text-sm text-secondary font-medium">
                      <div className="flex justify-between gap-4">
                        <span className="font-bold text-foreground">Mon — Fri</span>
                        <span>09:00 AM – 06:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="font-bold text-foreground">Saturday</span>
                        <span>10:00 AM – 04:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="font-bold text-foreground">Sunday</span>
                        <span className="text-violet-600 dark:text-violet-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4}>
              <PremiumCard className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-secondary ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all placeholder:text-secondary opacity-80 focus:opacity-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-secondary ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all placeholder:text-secondary opacity-80 focus:opacity-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all placeholder:text-secondary opacity-80 focus:opacity-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary ml-1">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-foreground/[0.03] dark:bg-white/5 border border-foreground/10 dark:border-white/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all placeholder:text-secondary opacity-80 focus:opacity-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-violet-600/20"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg animate-fade-in font-medium">
                      <CheckCircle2 size={20} />
                      <p className="text-sm">Message sent successfully! We'll be in touch soon.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg animate-fade-in font-medium">
                      <AlertCircle size={20} />
                      <p className="text-sm">Something went wrong. Please try again later.</p>
                    </div>
                  )}
                </form>
              </PremiumCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}

