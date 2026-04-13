/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.iceberg.com.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Eliminadas claves inválidas que causaban el error
  }
};

export default nextConfig;
