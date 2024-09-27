import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evoke",
  description: "A Personal Blogging Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner/>
        <Navbar />
        {children}
        <Newsletter />
        <Footer/> 
      </body>
    </html>

    
  );
}
