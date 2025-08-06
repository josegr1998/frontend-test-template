import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ToastContainer } from "@/components/Toast/Toast";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo", // creates a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
