import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { navigation } from "@/lib/config";
import { classNames } from "@/lib/util";
import { RootLayoutComponent } from "@/components/root-layout";

const dmSans = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naturheilpraxis - Frank Wiblishauser",
  description:
    "Frank Wiblishauser ist ehemaliger Fußballprofi und Heilpraktiker in Memmingen. Er bietet verschiedene Therapieformen für eine ganzheitliche Behandlung an.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full bg-white">
      <body className={classNames(dmSans.className, "h-full")}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </body>
    </html>
  );
}
