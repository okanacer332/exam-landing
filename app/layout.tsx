import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-body",
});

const display = Inter({
  subsets: ["latin-ext"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Papirus AI | Öğretim Üyeleri İçin Sınav Asistanı",
  description:
    "Papirus AI, öğretim üyelerinin sınav kağıtlarını daha hızlı ve adil okuması için geliştirilen bilge bir asistandır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${display.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
