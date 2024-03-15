import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { AppProvider } from "../context";

import { cn } from "./lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Colombia",
  description: "Personal project to express my love for Colombia and share some information about it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className="bg-slate-950 text-white flex flex-col min-h-screen">
          <main className={cn("flex-grow", fontSans.variable)}>{children}</main>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
