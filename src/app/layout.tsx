import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Writogram | Where Thoughts Find Their Voice",
  description: siteConfig.description,
  keywords: [
    "Writogram",
    "social platform for writing",
    "writers community",
    "poetry",
    "storytelling",
    "journaling",
    "creative writing",
    "creator partners",
    "founding members"
  ],
  authors: [{ name: "Writogram" }],
  creator: "Writogram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Writogram | Where Thoughts Find Their Voice",
    description: siteConfig.description,
    siteName: "Writogram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writogram | Where Thoughts Find Their Voice",
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Mukta+Mahee:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-secondary antialiased text-[#191621] bg-[#FFFCFF] selection:bg-[#EDE5FF] selection:text-[#4520A8]"
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
