import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritika Jaiswal | Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer building real-time, AI-powered web applications with Next.js, Node.js, and modern cloud tools.",
  metadataBase: new URL("https://portfolioritika.vercel.app"),
  openGraph: {
    title: "Ritika Jaiswal | Full-Stack AI Engineer",
    description:
      "Full-Stack AI Engineer building real-time, AI-powered web applications with Next.js, Node.js, and modern cloud tools.",
    url: "https://portfolioritika.vercel.app",
    siteName: "Ritika Jaiswal Portfolio",
    images: [
      {
        url: "/images/aapat.png",
        width: 1200,
        height: 630,
        alt: "Ritika Jaiswal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritika Jaiswal | Full-Stack AI Engineer",
    description:
      "Full-Stack AI Engineer building real-time, AI-powered web applications with Next.js, Node.js, and modern cloud tools.",
    images: [
      {
        url: "/images/aapat.png",
        alt: "Ritika Jaiswal Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
