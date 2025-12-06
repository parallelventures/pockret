import type { Metadata } from "next";
import "./globals.css";
import { ppAgrandirHeading, ppAgrandirBody } from "./fonts";

export const metadata: Metadata = {
  title: "Pockret - Find Your Forgotten Money",
  description: "Discover and recover lost assets, insurance policies, and forgotten accounts securely with Pockret.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppAgrandirHeading.variable} ${ppAgrandirBody.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
