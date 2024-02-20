import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import MainLayout from "@/components/MainLayout/MainLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Judy Ye's Portfolio",
  description: "Software developer, Judy Ye's, portfolio.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/undraw_smiley-face-light.svg",
        href: "/undraw_smiley-face-light.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/undraw_smiley-face-dark.svg",
        href: "/undraw_smiley-face-dark.svg",
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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
