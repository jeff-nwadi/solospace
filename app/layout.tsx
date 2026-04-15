import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/landingpage/Header";
import Footer from "@/components/landingpage/Footer";

const termina = localFont({
  src: [
    {
      path: "./fonts/TerminaTest-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/TerminaTest-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-termina",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solospace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${termina.variable} ${inter.variable} ${dm_sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
