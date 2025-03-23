import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3">
              <p className="flex items-center gap-1 text-current">
                <span className="text-default-600">&copy; Tout droits réservé, </span>
                <span className="text-secondary">Kévin Maublanc</span>
                <span className="text-default-600">, 2025 </span>
              </p>
              <div className="flex flex-row gap-5">
                <Link isExternal aria-label="X" href="https://x.com/_SilverHawks_">
                  <FaXTwitter className="text-default-500" />
                </Link>
                <Link isExternal aria-label="Linkdin" href="https://www.linkedin.com/in/kevinmaublanc/">
                  <FaLinkedinIn className="text-default-500" />
                </Link>
                <Link isExternal aria-label="Github" href="https://github.com/silverhawks1010">
                  <FaGithub className="text-default-500" />
                </Link>
                <ThemeSwitch />
              </div>

            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
