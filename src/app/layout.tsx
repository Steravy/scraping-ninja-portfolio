import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import ActiveSectionContextProvider from "@/context/active-section.context";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Scraping Ninja",
  description: "I build web scrapers and bots that efficiently gather information from the internet and provide real-time updates when changes occur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn('bg-background', calSans.className)}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
