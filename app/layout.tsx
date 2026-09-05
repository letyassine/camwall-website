import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "CamWall — Live Wallpaper From Your Camera",
  description:
    "the free and open source app for changing your desktop wallpaper to camera.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="32" />
      </Head>
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
