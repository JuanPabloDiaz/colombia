import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { DataProvider } from "../context";

import { Providers } from '../context/providers';
import { cn } from "./lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Colombia",
  description:
    "Personal project to express my love for Colombia and share some information about it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <DataProvider>
          <body className="flex min-h-screen flex-col bg-slate-950 text-white">
            <Nav />
            <main className={cn("flex-grow", fontSans.variable)}>
            <Providers>{children}</Providers>
            </main>
            <Footer />
          </body>
        </DataProvider>
    </html>
  );
}
