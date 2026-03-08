import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "RH Roofing Nottingham | Trusted Local Roofers | Roof Repairs & New Roofs",
  description:
    "RH Roofing Nottingham — reliable local roofers for roof repairs, new roofs, flat roofing, chimney repairs, and emergency callouts across Nottingham and Nottinghamshire. Free quotes available.",
  keywords:
    "roofers Nottingham, roof repairs Nottingham, roofing Nottingham, flat roofing Nottingham, emergency roof repairs Nottingham, chimney repairs Nottingham, new roofs Nottinghamshire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
