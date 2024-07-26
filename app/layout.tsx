import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    <html lang="de">
      <body className={dmSans.className}>
        <div className="bg-white">
          <Header />
          <main className="isolate">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
