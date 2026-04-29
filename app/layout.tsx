import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin-ext"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Papirus AI | Akademisyenler İçin Sınav Okuma",
  description:
    "Papirus AI, akademisyenlerin sınav kağıtlarını daha hızlı okuması, soruları ayırması ve değerlendirme kontrolünü düzenlemesi için geliştirilir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
