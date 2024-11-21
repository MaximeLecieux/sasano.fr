import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
