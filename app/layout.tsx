import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="calltouch"
          src="/assets/js/calltouch.js"
          strategy="beforeInteractive"
        />
        <Script
          id="yandex-metrika"
          src="/assets/js/yandex-metrika.js"
          strategy="beforeInteractive"
        />
        <noscript>
          <div>
            {/* biome-ignore lint/performance/noImgElement: Yandex.Metrika noscript fallback requires a plain tracking pixel. */}
            <img
              src="https://mc.yandex.ru/watch/99906066"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
