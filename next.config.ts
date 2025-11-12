import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Рабочая конфигурация после успешной сборки
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qaspilab.com',
      },
    ],
  },
  
  // Перенаправление с главной на /ru
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
