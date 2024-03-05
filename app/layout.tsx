import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sairam Techno Incubator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap"/>
</head>
    <body
        className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.className
        )}
    >
     {children}
    </body>
    </html>
  );
}
