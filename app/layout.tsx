import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Suporte } from "@/components/suporte";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <body className={plusJakartaSans.className}>
          <Suporte />
        </body>
    </html>
  );
}
