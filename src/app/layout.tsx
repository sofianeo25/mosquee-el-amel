import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosquée El Amel - Valserhône",
  description: "Site officiel de la Mosquée El Amel à Valserhône (01200). Horaires de prières, cours d'arabe et informations pratiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased selection:bg-mosque-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
