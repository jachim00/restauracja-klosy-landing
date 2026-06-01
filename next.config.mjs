/** @type {import('next').NextConfig} */
// Statyczny eksport pod GitHub Pages (jak pozostałe landingi).
// basePath/URL ustawiane przez env w GitHub Actions; lokalnie puste (działa na /).
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    // GitHub Pages nie ma serwera optymalizacji obrazów — serwujemy bez niej.
    unoptimized: true,
  },
  experimental: {
    // Lepszy tree-shaking ciężkich pakietów -> mniej JS, niższy TBT.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
