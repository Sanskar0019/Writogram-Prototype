import type { Metadata } from "next";
import { Croissant_One, DM_Sans } from "next/font/google";
import "./globals.css";

const croissant = Croissant_One({
  variable: "--font-croissant",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narrative Artists | Amazon Creative Studio",
  description: "Crafting stories buyers understand. We design Amazon A+ content, Brand Stores, and brand storytelling systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${croissant.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
