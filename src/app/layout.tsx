import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { yearsOfExperience } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usama Abid — Software Engineer & WordPress Developer",
  description:
    `Software Engineer & WordPress Developer with ${yearsOfExperience} years of experience: custom themes, Gutenberg block patterns, and conversion-focused websites for healthcare and wellness practices.`,
  openGraph: {
    title: "Usama Abid — Software Engineer & WordPress Developer",
    description:
      "Custom WordPress themes, Gutenberg pattern libraries, and lead-generating websites for therapy and wellness practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <div className="min-w-0 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
