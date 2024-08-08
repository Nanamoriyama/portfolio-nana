import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/Metadata/favicon.ico";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nana Moriyama",
  description: "Nana's Portfolio",
  icons: {
    icon: "/favicon.ico", // ここでファビコンを指定
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} page-wrapper`}>{children}</body>
    </html>
  );
}
