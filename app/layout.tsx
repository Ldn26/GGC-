import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
// const geistSans = localFont({
//   src: "/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
  
export const metadata: Metadata = {
  title: "خدام  | khedam ",
  description: "Welcome to khedam",
};

export default function RootLayout({
  children  , 

}: {
  children: React.ReactNode  ;

}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`
           w-full  antialiased`}
      >

        {children}
 

      </body>
    </html>
  );
}
