import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universal Fitness Club",
  description: "Elite personal training and nutrition coaching.",
};

import { Header } from "./components/layout/Header";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground font-sans`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
