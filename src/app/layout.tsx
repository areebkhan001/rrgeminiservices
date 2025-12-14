import "./globals.css";
import { Zen_Kaku_Gothic_New, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const zenKaku = Zen_Kaku_Gothic_New({ 
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-kaku"
});

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans"
});

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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${zenKaku.variable} ${notoSans.variable} font-sans overflow-x-hidden relative`} style={{ fontFamily: 'var(--font-zen-kaku), var(--font-noto-sans), sans-serif' }}>
        <ThemeProvider>
          <SmoothScroll />
          <div id="site-content">
            <Header />
            <main className="min-h-screen w-screen overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
