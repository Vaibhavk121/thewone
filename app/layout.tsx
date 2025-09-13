import type { Metadata } from "next";
import "./globals.css";


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
        className="bg-[#f5f3ed]"
      >
        {children}
      </body>
    </html>
  );
}
