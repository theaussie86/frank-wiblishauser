"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import frankWiblishauser from "@/components/images/frank-wiblishauser.jpeg";

const timeline = [
  {
    name: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];
const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

export default function Home() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            &ldquo;Fang niemals an aufzuhören, höre niemals auf
            anzufangen...&rdquo;
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 space-y-4">
            <p className="leading-5 text-gray-600">
              Getreu meines Lebensmotto war es vor einigen Jahren an der Zeit,
              die Laufbahn als Profi-Fussballer zu beenden und einen Neuanfang
              zu starten. Nachdem ich in meiner aktiven Karriere mit diversen
              Verletzungen (z. B. Knochenbrüche, Muskel- bzw. Sehnenrisse) und
              anderen Problemen (u. a. Allergien) zu tun hatte, habe ich für
              mich erfahren dürfen, dass es neben der Schulmedizin auch noch
              andere Möglichkeiten gibt, die Beschwerden lindern können oder
              sogar wieder zu bester Gesundheit verhelfen können. Somit war mein
              Interesse an der Naturheilkunde geweckt und hat mich nie wieder
              losgelassen. Auf der einen Seite hätte ich gerne auf das ein oder
              andere nicht so schöne „Ereignis“ verzichtet, auf der anderen
              Seite ist für meinen jetzigen Werdegang evtl. sogar vorteilhaft,
              gewisse Erfahrungen gemacht zu haben, um sich so ein Stück weit in
              den Patienten „hineinfühlen“ zu können.
            </p>
            <p className="leading-5 text-gray-600">
              Deshalb habe ich mich vor einigen Jahren dazu entschlossen, eine
              Ausbildung zum Heilpraktiker zu beginnen und habe diese dann auch
              erfolgreich abgeschlossen. Nach einigen Fort- und Weiterbildungen
              habe ich nun meine eigene Praxis in Memmingen.
            </p>
            <p className="leading-5 text-gray-600">
              Unser Körper kann lange Zeit gewisse Probleme oder Einflüsse, sei
              es körperlicher oder auch seelischer Art, kompensieren, doch
              sollten diese Störfaktoren zu viel für unser „System“ werden, ist
              er nicht mehr &ldquo;in (der) Ordnung&rdquo; und kann
              &ldquo;krank&rdquo; werden.
            </p>
            <p className="leading-5 text-gray-600">
              Falls auch Sie Interesse an einer Behandlung auf
              naturheilkundlicher Basis haben oder Ihrer Gesundheit etwas Gutes
              tun wollen, so werden wir versuchen, in einer ruhigen und
              entspannten Zusammenarbeit mit Ihnen Positives für Sie zu
              erreichen.
            </p>
          </div>
          <Image
            alt="Fank Wiblishauser"
            src={frankWiblishauser}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
  );
}
