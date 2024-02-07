import type { Metadata } from "next";
import Nav from "../nav";

export const metadata: Metadata = {
  title: "Explanations | Seeoul City",
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="keywords"
          content="Seoul, News, City, Broadcast, Explanation,서울시, 해명자료, 설명자료, 기사, 신문"
        />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Subject" content="Seoul City News" />
        <meta
          http-equiv="refresh"
          content="revealtrans(Duration=1, Transition=23)"
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
