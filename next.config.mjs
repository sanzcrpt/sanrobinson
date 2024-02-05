import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
    images: {
      // Adjust the images configuration as needed
    },
  },
};

export default withContentlayer(nextConfig);
