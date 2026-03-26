import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fallbackLandingContent } from "@/lib/landing-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: fallbackLandingContent.seoTitle,
  description: fallbackLandingContent.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
