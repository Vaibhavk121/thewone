import type { Metadata } from "next";
import "./globals.css";
import localFont from  "next/font/local";

const helvetica = localFont({
  src: [
    { path: '../public/fonts/Helvetica.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Helvetica-Bold.woff', weight: '700', style: 'normal' },
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: "Recruiting system that helps you hire better talent faster.",
  description: "Created by Vaibhav Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#f5f3ed] {helvetica.variable}"
      >
        {children}
      </body>
    </html>
  );
}
