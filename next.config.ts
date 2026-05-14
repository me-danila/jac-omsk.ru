import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/assets/img",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_remoteImageCacheTTL: "2592000",
    nextImageExportOptimizer_generateAndUseBlurImages: "false",
    nextImageExportOptimizer_quality: "90",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1200, 1600, 1920],
  },
};

export default nextConfig;
