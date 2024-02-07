import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Seoul City News",
  description: "서울시 해명/보도자료를 확인할 수 있는 웹 서비스입니다.",
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
        <meta
          name="keywords"
          content="Seoul, News, City, Broadcast, Explanation,서울시, 해명자료, 보도자료, 기사, 신문"
        />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Subject" content="Seoul City News" />
        <meta
          http-equiv="refresh"
          content="revealtrans(Duration=1, Transition=23)"
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
