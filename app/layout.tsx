import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import BottomNavbar from "@/components/BottomNavbar";
import TopBar from "@/components/topbar";

const spaceGrostesk = Space_Grotesk({
  variable: "--space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XFL123 Club Apps",
  description: "XFL123 Adalah salah satu komunitas sepakbola dimana didalamnya terdapat tim minisoccer, futsal dan sepakbola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrostesk.variable} antialiased w-full max-w-[430px] mx-auto bg-white min-h-screen`}
      >
        <TopBar />
        {children}
        <BottomNavbar />
      </body>
    </html>
  );
}
