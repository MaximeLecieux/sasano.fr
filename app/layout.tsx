import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/components/navigation/Header";
import Footer from "@/components/ui/components/navigation/Footer";

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
      <body className="bg-back-200 mx-[70px] h-screen">
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
