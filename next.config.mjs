/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/explanations/:start/:end",
        destination:
          "http://openapi.seoul.go.kr:8088/586e504f7868776136376646754264/xml/tvExplanationInfo/:start/:end",
      },
      {
        source: "/api/news/:start/:end",
        destination:
          "http://openapi.seoul.go.kr:8088/586e504f7868776136376646754264/xml/tvReportedInfo/:start/:end",
      },
    ];
  },
};

export default nextConfig;
