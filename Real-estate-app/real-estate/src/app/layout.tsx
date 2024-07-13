import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";
import AppBar from "./components/AppBar";
import SigninPanel from "./components/signInPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "admin app",
  description: "enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar>
          <SigninPanel />
        </AppBar>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
