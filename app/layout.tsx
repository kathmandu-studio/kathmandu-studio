import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Footer, Navbar } from "components/shared/molecules";

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
        <div className="sticky top-0 z-50 bg-secondary">
          <Navbar />
        </div>
        <main className="w-full xl:w-container px-4 xl:px-0 mx-auto min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
