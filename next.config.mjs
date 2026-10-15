/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy URL -> new URL (301 permanent)
      { source: "/outfitter-affiliations", destination: "/outfitters", permanent: true },
      { source: "/taxidermy-photos", destination: "/gallery", permanent: true },
      { source: "/taxidermy-options/antelope-options", destination: "/services/antelope", permanent: true },
      { source: "/taxidermy-options/elk-options", destination: "/services/elk", permanent: true },
      { source: "/taxidermy-options/deer-options", destination: "/services/deer", permanent: true },
      { source: "/taxidermy-options/bear-options", destination: "/services/bear", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/terms", destination: "/terms", permanent: true },
    ];
  },
};
export default nextConfig;
