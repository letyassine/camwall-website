import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
    <html lang="en" className="h-full antialiased">
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="32" />
      </Head>
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
