import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Li — Angel Investor",
  description:
    "I want to be the first person you call when things go wrong.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
