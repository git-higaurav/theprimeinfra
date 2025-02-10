import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'
import Script from 'next/script'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: 'black',
  viewportFit: "cover",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Prime Infra",
    template: "%s | The Prime Infra"
  },
  description: "The Prime Infra - Your trusted partner in Dehradun real estate. We help you find your dream property with our expert team of real estate professionals.",
  keywords: ["real estate", "property", "Dehradun", "The Prime Infra", "property dealers", "real estate agents", "property consultants"],
  authors: [{ name: "The Prime Infra" }],
  creator: "The Prime Infra",
  publisher: "The Prime Infra",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "The Prime Infra",
    description: "Your trusted partner in Dehradun real estate",
    url: "https://theprimeinfra.com",
    siteName: "The Prime Infra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prime Infra",
    description: "Your trusted partner in Dehradun real estate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VRH0X1ET79"></Script>
    <Script>
       {`
         window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VRH0X1ET79');
        
        `}
</Script>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
