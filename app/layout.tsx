import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kokoa — Conscious Indulgence. Crafted at the Source.",
  description:
    "Experience the perfect bite. 100% upcycled Ecuadorian cacao enrobing vibrant, fresh-frozen fruit. Bean-to-cup, locally manufactured in Guayaquil, Ecuador.",
  keywords: [
    "Kokoa",
    "Ecuadorian chocolate",
    "frozen fruit chocolate",
    "upcycled cacao",
    "bean to cup",
    "sustainable chocolate",
    "Arriba Nacional",
  ],
  openGraph: {
    title: "Kokoa — Conscious Indulgence. Crafted at the Source.",
    description:
      "100% upcycled Ecuadorian cacao enrobing vibrant, fresh-frozen fruit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
