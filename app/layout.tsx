import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/components/navigation/Header";
import Footer from "@/components/ui/components/navigation/Footer";
import Container from "@/components/ui/design-system/container/Container";

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
      <body className="bg-back-200 h-screen w-screen">
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
