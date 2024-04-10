import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/smooth-scrolling";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
