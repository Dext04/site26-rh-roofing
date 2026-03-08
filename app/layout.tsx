import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
