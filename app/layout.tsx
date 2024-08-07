import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Login from "./login/page";

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
        <Login/>
        {/* <Navbar/>
        {children}
        <Newsletter />
        <Footer/> */}
      </body>
    </html>

    
  );
}
