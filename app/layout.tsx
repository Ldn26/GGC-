import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import React from "react";
// const geistSans = localFont({
//   src: "/fonts/RobotoSlab-Bold.ttf",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff",ww
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
  
export const metadata: Metadata = {
  title: " Green Grouth  ",
  description: "Welcome to our start up",
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
