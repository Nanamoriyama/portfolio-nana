import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Head from "next/head"; // Headコンポーネントをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nana Moriyama",
  description: "Nana's Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // タイトルがnullまたはundefinedの場合のデフォルトタイトルを設定
  const pageTitle: string = (metadata.title as string) || "Default Title";

  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={(metadata.description as string) || "Default description"}
        />
        {metadata.icons && (
          <>
            {typeof metadata.icons === "string" ? (
              <link rel="icon" href={metadata.icons} />
            ) : Array.isArray(metadata.icons) ? (
              metadata.icons.map((icon, index) => (
                <link
                  key={index}
                  rel="icon"
                  href={typeof icon === "string" ? icon : (icon as any).url}
                />
              ))
            ) : (
              <>
                {"url" in (metadata.icons as any) && (
                  <link rel="icon" href={(metadata.icons as any).url} />
                )}
                {"apple" in (metadata.icons as any) && (
                  <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={(metadata.icons as any).apple}
                  />
                )}
              </>
            )}
          </>
        )}
      </head>
      <body className={`${inter.className} page-wrapper`}>{children}</body>
    </html>
  );
}
