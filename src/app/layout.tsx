import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { Footer } from "../widgets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Алёнушка — семейное кафе в Севастополе",
  description:
    "Уютное семейное кафе Алёнушка: блины, горячие блюда, паста и напитки. Севастополь, сквер 60-летия СССР.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
