import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import LayoutWrapper from "components/shared/LayoutWrapper";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // CSS variable for Outfit
});

export const metadata = {
  title: "Kathmandu Studio",
  description: "Welcome to Kathmandu Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <LayoutWrapper>{children}</LayoutWrapper>
        {/* Elfsight WhatsApp Chat | Untitled WhatsApp Chat */}
        <Script src="https://elfsightcdn.com/platform.js" async></Script>
        <div
          className="elfsight-app-35d1073f-b9a7-4eda-ae8d-2560d7592904"
          data-elfsight-app-lazy
        ></div>
      </body>
    </html>
  );
}
