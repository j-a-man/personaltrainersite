import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { ChatbotWrapper } from "./components/ChatbotWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Legacy Strength",
  description: "Personal training and nutrition coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased`}>
        <Header />
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
