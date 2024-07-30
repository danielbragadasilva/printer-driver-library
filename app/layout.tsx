import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suporte } from "@/components/component/suporte";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Suporte",
  description: "Utilitarios do suporte da yooga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Suporte />
        </body>
    </html>
  );
}
