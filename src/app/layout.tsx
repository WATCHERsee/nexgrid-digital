import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NexGrid Digital — IT & Marketing Agency",
  description:
    "NexGrid Digital delivers web & software development, digital marketing, IT consulting, and branding for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-background text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
