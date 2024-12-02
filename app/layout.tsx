import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/components/navigation/Header";

export const metadata: Metadata = {
  title: "Sasano.fr",
  description: "Ceci est le texte de description de sasano.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="mx-[70px]">
      <Header />
        {children}
      </body>
    </html>
  );
}
