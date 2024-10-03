import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";
import { Profile } from "@/components/Profile";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hillary Hamilton",
  description:
    "meta-description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "flex flex-col antialiased min-h-screen bg-gray-100")}>
        <div className='md:hidden'>
          <div className='h-48 pt-8 pb-12 items-center justify-center flex w-full'>
            <Profile />
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="md:flex hidden">
            <Sidebar />
          </div>
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 md:ml-64 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen md:rounded-tl-xl border border-transparent md:border-neutral-200 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </div>
                <FloatingDock />
      </body>
    </html>
  );
}
