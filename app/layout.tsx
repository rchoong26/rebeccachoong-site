import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebecca Choong | Microbiome & Bio-Ecosystem Strategist",
  description:
    "Building high-value bio solutions through microbiome technology, AI systems and market strategy."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
