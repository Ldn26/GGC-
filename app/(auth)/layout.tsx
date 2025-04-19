import type { Metadata } from "next";

import React from "react";

  import Header from "@/components/Header";
export const metadata: Metadata = {
  title: " Green Grouth Login ",
  description: "create account",
};

export default function RootLayout({
  children  , 

}: {
  children: React.ReactNode  ;

}) {
  return (
<div>
<Header />
    {children}
</div>
  );
}
