import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";



export const metadata: Metadata = {
  title: "QUENTRA Real Estate",
  description: "Trusted Experts in Real Estate & Development",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
