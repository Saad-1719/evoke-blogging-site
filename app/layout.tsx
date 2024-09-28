import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evoke - Personal Blogging Site | Insights, Stories, and More",
  description: "Evoke is your go-to personal blog featuring stories, insights, and inspiration on a variety of topics. Join the conversation!",
  keywords: "personal blog, Evoke blog, stories, insights, lifestyle, blogging, inspiration",
  openGraph: {
    title: "Evoke - Personal Blogging Site",
    description: "Discover stories, insights, and personal reflections on Evoke, your go-to personal blog.",
    url: "https://evoke-blog.netlify.app/",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
