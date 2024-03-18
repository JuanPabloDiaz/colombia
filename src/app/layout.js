import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar } from "@/components/Sidebar";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DataProvider } from "@/context";

import { Providers } from "@/context/providers";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

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
        <body className="appBackground flex min-h-screen flex-col text-white">
          {/* <body className="appBackground flex h-screen min-h-screen w-screen flex-col overflow-y-auto overflow-x-hidden text-white"> */}
          {/* <Header /> */}
          <Sidebar />
          <main
            className={cn(
              "flex flex-grow flex-col md:pl-[300px]",
              fontSans.variable,
            )}
          >
            <Providers>
              <div className="flex-grow px-4 py-2 md:px-8 xl:px-10">
                {children}
              </div>
            </Providers>
            <Toaster />
            <Footer />
          </main>
        </body>
      </DataProvider>
    </html>
  );
}
