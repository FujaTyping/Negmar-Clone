import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Navbar from "./components/Navbar";
import { Prompt } from "next/font/google";
import Totop from "./components/Totop";
import Footer from "./components/Footer";

const PT = Prompt({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Negmar",
  description: "Negmar home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PT.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Totop />
      </body>
      <PrelineScript />
    </html>
  );
}
