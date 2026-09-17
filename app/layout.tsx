import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Li — Angel Investor",
  description:
    "Brian Li backs founders building the systems, products, and institutions of an extraordinary future.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
