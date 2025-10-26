import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaymentReminder } from "@/components/PaymentReminder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RR Gemini Services",
  description: "Your trusted partner in education, business, and retail services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <PaymentReminder />
        <div id="site-content">
          <Header />
          <main className="min-h-screen w-screen overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
