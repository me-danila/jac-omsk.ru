"use client";

import Image, { type ImageProps } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import type { ComponentProps } from "react";

type OptimizedImageProps = ImageProps;

const developmentLoader: NonNullable<ImageProps["loader"]> = ({ src }) => src;

export default function OptimizedImage(props: OptimizedImageProps) {
  if (process.env.NODE_ENV === "development") {
    return <Image {...props} unoptimized loader={developmentLoader} />;
  }

  return <ExportedImage {...(props as ComponentProps<typeof ExportedImage>)} />;
}
