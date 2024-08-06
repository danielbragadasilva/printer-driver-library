import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suporte } from "@/components/suporte";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandora",
  description: "Utilitarios do suporte",
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
