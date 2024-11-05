import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Untitled | Trust in Every Trade",
    template: "%s | Untitled",
  },
  description:
    "Untitled is a trusted platform for secure data trading, where IP is protected and future is secured.",
  icons: {
    icon: "/share.svg",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      {/* `suppressHydrationWarning` only affects the html tag,
      and is needed by `ThemeProvider` which sets the theme
      class attribute on it */}
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
          </ThemeProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
