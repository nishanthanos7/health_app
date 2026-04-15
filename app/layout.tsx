import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Nepal Health Treatment Clinic",
  description: "Providing reliable and affordable healthcare services for you and your family, anytime you need us. Nagarjun-01, Raniban, Kathmandu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
