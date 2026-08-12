import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prata = Prata({ weight: "400", subsets: ["latin"], variable: "--font-prata" });

export const metadata: Metadata = {
  title: "Restoration Dossier",
};

export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${prata.variable}`}>
      <body className="bg-white text-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
