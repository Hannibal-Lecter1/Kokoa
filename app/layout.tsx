import type { Metadata } from "next";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export const metadata: Metadata = {
  title: "LeKokoa — Real Frozen Fruit. Double-Coated in Ecuadorian Chocolate.",
  description:
    "Whole frozen fruit double-coated in premium Ecuadorian chocolate. Crafted at the source in Guayaquil, Ecuador. B2B wholesale inquiries welcome.",
  keywords: [
    "LeKokoa",
    "frozen fruit chocolate",
    "Ecuadorian chocolate",
    "double-coated fruit",
    "frozen confectionery",
    "B2B wholesale frozen fruit",
    "cacao superfruit nectar",
  ],
  openGraph: {
    title: "LeKokoa — Real Frozen Fruit. Double-Coated in Ecuadorian Chocolate.",
    description:
      "Whole frozen fruit. Two layers of premium Ecuadorian chocolate. Crafted at the source.",
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
        {[
          "/products/tub-strawberry.webp",
          "/products/tub-rasp-milk.webp",
          "/products/tub-rasp-dark.webp",
          "/products/tub-blue.webp",
          "/products/tub-banana.webp",
          "/products/tub-pina-colada.webp",
        ].map((src) => (
          <link key={src} rel="preload" as="image" href={src} fetchPriority="high" />
        ))}
        <link rel="preload" as="image" href="/lifestyle/scattered.jpeg" />
      </head>
      <body><AnalyticsTracker />{children}</body>
    </html>
  );
}
