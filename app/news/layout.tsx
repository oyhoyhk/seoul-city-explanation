import type { Metadata } from "next";
import Nav from "../nav";

export const metadata: Metadata = {
  title: "News | Seeoul City",
  description: "Seoul City News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
