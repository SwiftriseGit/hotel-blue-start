import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelsilverstar.in"),
  title: {
    default: "Hotel Silver Star | Best Hotel in Rourkela",
    template: "%s | Hotel Silver Star",
  },
  description: "Experience the perfect blend of luxury and value at Hotel Silver Star. Comfortable rooms, affordable prices, and spacious banquet halls for business and leisure stays in Rourkela, Odisha.",
  keywords: ["Hotel Silver Star", "best hotel in Rourkela", "comfortable room", "affordable price", "business model hotel", "open space hotel", "luxury stay Rourkela", "Rourkela accommodation"],
  authors: [{ name: "Hotel Silver Star" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hotelsilverstar.in",
    siteName: "Hotel Silver Star",
    title: "Hotel Silver Star | Best Hotel in Rourkela",
    description: "Experience the perfect blend of luxury and value at Hotel Silver Star. Comfortable rooms and affordable prices in Rourkela.",
    images: [
      {
        url: "/image copy.png",
        width: 1200,
        height: 630,
        alt: "Hotel Silver Star Premium Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Silver Star | Best Hotel in Rourkela",
    description: "Comfortable rooms, affordable prices, and luxury stays in Rourkela, Odisha.",
    images: ["/image copy.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
