import { rmSync } from "node:fs";
import { join } from "node:path";

const pathsToRemove = [
  "public/assets/img/next-image-export-optimizer-hashes.json",
  "public/assets/img/nextImageExportOptimizer",
  "public/assets/img/banners/nextImageExportOptimizer",
  "public/assets/img/banners/mobile/nextImageExportOptimizer",
  "public/assets/img/icons/nextImageExportOptimizer",
  "public/assets/img/models/nextImageExportOptimizer",
];

for (const relativePath of pathsToRemove) {
  rmSync(join(process.cwd(), relativePath), {
    force: true,
    recursive: true,
  });
}
