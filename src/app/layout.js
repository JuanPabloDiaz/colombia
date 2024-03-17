import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DataProvider } from "@/context";

import { Providers } from "@/context/providers";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata = {
  title: "Amo Colombia",
  description:
    "Personal project to express my love for Colombia and share some information about it.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
        {/* <body className="flex min-h-screen flex-col bg-slate-950 text-white"> */}
        <body className="appBackground flex min-h-screen flex-col text-white">
          {/* <Header /> */}
          <Sidebar />
          <main className={cn("flex-grow pl-[300px] ", fontSans.variable)}>
            <Providers>
              <div className="px-4 md:px-8 xl:px-10">{children}</div>
            </Providers>
          </main>
          <Footer />
        </body>
      </DataProvider>
    </html>
  );
}
