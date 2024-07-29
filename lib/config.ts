export type MenuItem = {
  name: string;
  href: string;
  current?: boolean;
  children?: MenuItem[];
};

export const navigation: MenuItem[] = [
  { name: "Start", href: "#" },
  {
    name: "Therapieformen",
    href: "#",
    children: [
      { name: "Manuelle Medizin", href: "#" },
      { name: "Neuraltherapie", href: "#" },
      { name: "Frauenheilkunde", href: "#" },
      { name: "APM nach Penzel", href: "#" },
      { name: "Homöopathie", href: "#" },
      { name: "Krebstherapie", href: "#" },
      { name: "Ohrakkupunktur", href: "#" },
      { name: "R.E.S.E.T", href: "#" },
      { name: "Personal Training", href: "#" },
      { name: "BEMER Gefäßtherapie", href: "#" },
    ],
  },
  { name: "Kontakt", href: "#" },
  { name: "Praxis", href: "#" },
  { name: "Impressum", href: "#" },
  { name: "Datenschutz", href: "#" },
];

export const metadata = {
  title: "Naturheilpraxis - Frank Wiblishauser",
  description:
    "Frank Wiblishauser ist ehemaliger Fußballprofi und Heilpraktiker in Memmingen. Er bietet verschiedene Therapieformen für eine ganzheitliche Behandlung an.",
  phone: "+49 (0) 83 31 / 7 54 93 43",
};
