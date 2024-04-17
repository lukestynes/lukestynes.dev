import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
      <body className={`${GeistSans.className}`}>
        <SpeedInsights />
        <Analytics />
        {/* <SmoothScrolling> */}
        {children}
        <Footer />
        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
