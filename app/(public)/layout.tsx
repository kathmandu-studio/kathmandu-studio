import "app/globals.css";

import { Inter, Outfit } from "next/font/google";
import { ClientLayoutWrapper } from "components/layout";
import { AnalyticsProvider, MetaPixelProvider } from "components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
        <ClientLayoutWrapper>
          <MetaPixelProvider />
          <AnalyticsProvider />
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
