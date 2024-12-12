import type { Metadata } from "next";
import { ABeeZee, ADLaM_Display, Comforter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Comforter({
  subsets: ["latin"],
  weight:"400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
