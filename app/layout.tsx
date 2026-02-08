'use client'

import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light">
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
