import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

export const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Eduardo Valdovinos portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}