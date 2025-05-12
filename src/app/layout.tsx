import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
