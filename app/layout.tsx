import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toni Michelle Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
