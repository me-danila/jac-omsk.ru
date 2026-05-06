import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "М-Тракс - официальный дилер коммерческого транспорта JAC",
  description:
    "Подход компании JAC Motors к продвижению продукции основывается на принципах профессионализма, максимальной клиентоориентированности и честной конкурентной политики.",
};

const fontManrope = localFont({
  src: "./fonts/Manrope.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`h-full antialiased scroll-smooth ${fontManrope.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
