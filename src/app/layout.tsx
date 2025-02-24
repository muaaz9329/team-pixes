import "./globals.css";

import { Inter, Dancing_Script as Dosis } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
