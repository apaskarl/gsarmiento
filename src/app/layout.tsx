import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glenard Sarmiento – Portfolio",
  description:
    "Glenard Sarmiento is an educator, builder, and learner. He is a graduate of Northeastern Cebu Colleges and Cebu Institute of Technology – University. He is passionate about teaching and learning.",
  metadataBase: new URL("https://gsarmiento.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://gsarmiento.vercel.app",
    title: "Glenard Sarmiento – Portfolio",
    description:
      "Discover the work of Glenard Sarmiento, an educator, builder, and learner. He is a graduate of Northeastern Cebu Colleges and Cebu Institute of Technology – University. He is passionate about teaching and learning.",
    siteName: "Glenard Sarmiento Portfolio",
    images: [
      {
        url: "https://gsarmiento.vercel.app/images/seo-preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Glenard Sarmiento's Portfolio",
      },
    ],
    locale: "en_US",
  },

  keywords: [
    "Glenard Sarmiento",
    "Glenard",
    "Sarmiento",
    "Educator",
    "Builder",
    "Learner",
    "Portfolio",
    "Personal Portfolio Website",
    "Northeastern Cebu Colleges",
    "Cebu Institute of Technology – University",
    "CTU-Danao Campus",
  ],
  authors: [{ name: "Glenard Sarmiento", url: "https://gsarmiento.vercel.app" }],
  creator: "Glenard Sarmiento",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Glenard Sarmiento – Portfolio</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Glenard Sarmiento",
              url: "https://gsarmiento.vercel.app",
              image: "https://gsarmiento.vercel.app/images/seo-preview.png",
              sameAs: [
                "https://github.com/gsarmiento",
                "https://www.linkedin.com/in/glenard-sarmiento-2784a632a/",
              ],
              jobTitle: "Educator, Builder, and Learner",
              worksFor: {
                "@type": "Organization",
                name: "Portfolio / Personal Projects",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Cebu Technological University - Danao Campus",
              },
              description:
                "Glenard Sarmiento is an educator, builder, and learner. He is a graduate of Northeastern Cebu Colleges and Cebu Institute of Technology – University. He is passionate about teaching and learning.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
