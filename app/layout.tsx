import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plumgardenchakura.com"), // TODO: replace with real production domain
  title: {
    default: "Plum Garden & CHAKURA | Asian Fusion & Tea Bar in Burnaby",
    template: "%s | Plum Garden & CHAKURA",
  },
  description:
    "Crispy chicken katsu, rice bowls, noodles, hotpot, and a full bubble tea & fruit tea bar near SFU in Burnaby, BC. Order online for delivery or pickup.",
  openGraph: {
    title: "Plum Garden & CHAKURA | Asian Fusion & Tea Bar in Burnaby",
    description:
      "Crispy chicken katsu, rice bowls, noodles, hotpot, and a full bubble tea & fruit tea bar near SFU in Burnaby, BC.",
    siteName: "Plum Garden & CHAKURA",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
