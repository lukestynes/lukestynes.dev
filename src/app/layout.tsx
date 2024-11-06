import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
// import SmoothScrolling from "@/components/smooth-scrolling";

export const metadata = {
  title: "Luke Stynes - Software Engineer",
  description: "My personal developer portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-GP8NQ0L6TC" />
      <head>
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="1e9e4307-f152-4192-a6d5-3eca49fc6fba"
        />
      </head>
      <body className={`${GeistSans.className}`}>
        <SpeedInsights />
        <Analytics />
        {/* <SmoothScrolling> */}
        {children}
        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
