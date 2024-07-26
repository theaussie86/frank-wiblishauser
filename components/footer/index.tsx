import { metadata } from "@/lib/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="mt-32 sm:mt-40">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-center lg:mt-24 text-gray-500 text-xs leading-5 gap-x-3">
          <p className="mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} {metadata.title}
          </p>
          |<Link href="/impressum">Impressum</Link>|
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
