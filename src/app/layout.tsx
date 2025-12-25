import type { Metadata } from "next";
import "./globals.css";
import { ppAgrandirHeading, sfProDisplayRegular } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Pockret - Find Your Forgotten Money",
  description: "Discover and recover lost assets, insurance policies, and forgotten accounts securely with Pockret.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppAgrandirHeading.variable} ${sfProDisplayRegular.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-sf-pro-regular), sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
