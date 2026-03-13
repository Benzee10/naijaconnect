import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NaijaConnect – Meet Real Women Near You",
  description: "Browse verified profiles of real Nigerian women. Connect directly via WhatsApp.",
  keywords: ["dating", "Nigeria", "meet women", "naija connect", "profiles"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && d)) document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        <footer className="border-t border-gray-100 dark:border-gray-800 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-gray-500 dark:text-gray-500 space-y-1">
            <p>© {new Date().getFullYear()} NaijaConnect. All rights reserved.</p>
            <p>This platform is for adults 18+ only. All profiles are verified.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
