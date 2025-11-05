import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isekai Technologies — Apps · Websites · Media",
  description: "Isekai Technologies builds modern apps, high-performing websites, and crafted media experiences.",
  themeColor: "#e23b2a",
  openGraph: {
    title: "Isekai Technologies",
    description: "Apps · Websites · Media · Other tech products",
    images: ["/logos/full-logo.png"]
  },
  icons: { icon: "/logos/logo-brand.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
