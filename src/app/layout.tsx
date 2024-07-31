// layout.tsx (サーバーコンポーネント)
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nana Moriyama",
  description: "Nana's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} page-wrapper`}>{children}</body>
    </html>
  );
}
