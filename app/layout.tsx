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
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6911ab88ee2732195b2fc4cc/1j9mgc3ka';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
