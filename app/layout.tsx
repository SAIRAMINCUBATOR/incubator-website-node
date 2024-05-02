import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/Provider";
import { Toaster } from "sonner";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Sairam Techno Incubator",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/new-logo-nobg.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          inter.className
        )}
      >
        <Providers>
          <Toaster position="top-right" />
          <Suspense>
          {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
