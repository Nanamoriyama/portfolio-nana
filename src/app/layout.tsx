// layout.tsx (サーバーコンポーネント)
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Headコンポーネントをインポート

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/nlogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/nlogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/nlogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/nlogo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${inter.className} page-wrapper`}>{children}</body>
    </html>
  );
}
