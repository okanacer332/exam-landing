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
  title: "Papirus AI | SÄ±nav KaÄŸÄ±dÄ± Okuma AsistanÄ±",
  description:
    "Hocalar ve asistanlar iÃ§in sÄ±nav kaÄŸÄ±tlarÄ±nÄ± okuyup soru bazlÄ± deÄŸerlendirme akÄ±ÅŸÄ±na hazÄ±rlayan landing sistemi.",
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
