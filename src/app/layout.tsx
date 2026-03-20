import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ТехЭксплуатация | Техническое обслуживание зданий и ИТП",
  description:
    "Комплекс работ по поддержанию работоспособности инженерных систем, конструктивных элементов здания и обеспечению их безаварийной эксплуатации.",
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
