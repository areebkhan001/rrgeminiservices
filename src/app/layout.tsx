import "./globals.css";
import { Outfit, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "RR Gemini Services | Premium Business Advisory",
  description: "Your trusted partner in education, business, and retail services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased selection:bg-violet-500/30`}>
        <ThemeProvider>
          <SmoothScroll />
          <div id="site-content" className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

