import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// --- Font Configurations ---

// 1. Body Font (Standard)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
});

// 2. Header Font (Elegant)
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'],
  display: 'swap',
});
// 3. Optional Default Next.js Fonts (You can keep these if you want)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ Lights - Professional Christmas Lights Installation",
  description: "Professional Christmas lights setup and takedown services. We use your lights to create beautiful holiday displays in your area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // UPDATE HERE: 
        // 1. Added ${inter.variable} and ${dancingScript.variable}
        // 2. Added 'font-sans' to make Inter the default font for the whole site
        className={`${inter.variable} ${dancingScript.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}