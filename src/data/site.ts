export const site = {
  name: "Dan French Taxidermy",
  tagline: "Trophy Game Taxidermy — Colorado · Wyoming · New Mexico",
  shortDescription:
    "High-end big game taxidermy serving hunters, outfitters, and outdoor enthusiasts across the Rockies.",
  phone: "(970) 218-6281",
  phoneHref: "tel:+19702186281",
  email: "dan@danfrenchtaxidermy.com",
  address: {
    street: "3200 CR 54G",
    city: "Laporte",
    state: "CO",
    zip: "80535",
    country: "USA",
  },
  social: {
    facebook: "https://www.facebook.com/danfrenchtaxidermy",
    instagram: "https://www.instagram.com/danfrenchtaxidermy/",
  },
  serviceAreas: ["Colorado", "Wyoming", "New Mexico"],
  siteUrl: "https://danfrenchtaxidermy.com",
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Antelope", href: "/services/antelope" },
      { label: "Elk", href: "/services/elk" },
      { label: "Deer", href: "/services/deer" },
      { label: "Bear", href: "/services/bear" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Outfitters", href: "/outfitters" },
  { label: "Contact", href: "/contact" },
];
