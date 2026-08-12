export type Plate = {
  id: string;
  src: string;
  alt: string;
  label: string;
  caption?: string;
  ratio: string;
};

export const brand = {
  name: "Casa de Vidro",
  latin: "Casa de Vidro — Portuguese for “glass house”.",
  tagline:
    "A glass house wrapped in bright terracotta, lifted into the trees. An architectural statement in the heart of Goa.",
  cta: "Arrange a private viewing",
  email: "private@casadevidro.example",
};

export const heroLabel = "Plate I — The Exterior";

export const manifesto = {
  line: "Origami roofs encompass you, the 2-tier bridge makes you lose no height. Light comes in through every wall. What you see from outside, you see from inside. Surrounded by nature. In the heart of Siolim.",
  author: "An art mansion"
};

export const housePlates: Plate[] = [
  {
    id: "exterior-2",
    src: "/images/exterior/exterior-wide.jpg",
    alt: "Wide view of the Casa de Vidro exterior showing the terracotta walls and glazing.",
    label: "Plate II — Massing",
    caption: "Terracotta holding glass above the garden.",
    ratio: "wide",
  },
];

export const livingPlates: Plate[] = [
  {
    id: "living-1",
    src: "/images/living/living-1.jpg",
    alt: "Living room, portrait view.",
    label: "Plate III — The Living Room",
    caption: "The room that opens the house to the garden.",
    ratio: "portrait",
  },
  {
    id: "living-2",
    src: "/images/living/living-2.jpg",
    alt: "Living room, wide view.",
    label: "Plate III — The Living Room",
    caption: "Light tracked across the day.",
    ratio: "landscape",
  },
  {
    id: "living-3",
    src: "/images/living/living-3.jpg",
    alt: "Living room, second wide view.",
    label: "Plate III — The Living Room",
    caption: "Nothing between inside and outside but glass.",
    ratio: "landscape",
  },
  {
    id: "pool-view",
    src: "/images/pool/pool-view.jpg",
    alt: "Living space seen toward the pool.",
    label: "Plate III — Toward the Water",
    caption: "The pool drawn up beside the glass.",
    ratio: "portrait",
  },
];

export const spacePlates: Plate[] = [
  {
    id: "den",
    src: "/images/interior/den.jpg",
    alt: "The den, a quiet room for reading.",
    label: "The Den",
    caption: "A quiet room for reading.",
    ratio: "landscape",
  },
  {
    id: "family-living",
    src: "/images/interior/family-living.jpg",
    alt: "The family living room.",
    label: "Family Living",
    caption: "Where the house gathers.",
    ratio: "portrait",
  },
  {
    id: "master-1",
    src: "/images/interior/master-bedroom-1.jpg",
    alt: "The master bedroom, first view.",
    label: "Master Bedroom",
    caption: "The suite above the canopy.",
    ratio: "landscape",
  },
  {
    id: "master-2",
    src: "/images/interior/master-bedroom-2.jpg",
    alt: "The master bedroom, second view.",
    label: "Master Bedroom",
    caption: "Morning light, first thing.",
    ratio: "landscape",
  },
  {
    id: "terrace",
    src: "/images/interior/roof-top-terrace.jpg",
    alt: "The rooftop terrace.",
    label: "Roof Top Terrace",
    caption: "The house’s last room, open to the sky.",
    ratio: "landscape",
  },
  {
    id: "bath",
    src: "/images/interior/master-bath.jpg",
    alt: "The top-floor master bath.",
    label: "Top Floor Bath",
    caption: "Terracotta and glass at the top of the house.",
    ratio: "portrait",
  },
];

export const sitePlates: Plate[] = [
  {
    id: "site-1",
    src: "/images/site/WhatsApp Image 2026-06-29 at 15.49.33 (1).jpeg",
    alt: "The house on its site, view one.",
    label: "Plate V — The Site",
    caption: "The house as it stands.",
    ratio: "portrait",
  },
  {
    id: "site-2",
    src: "/images/site/WhatsApp Image 2026-06-29 at 15.49.34 (2).jpeg",
    alt: "The house on its site, view two.",
    label: "Plate V — The Site",
    caption: "Set among the trees.",
    ratio: "portrait",
  },
  {
    id: "site-3",
    src: "/images/site/WhatsApp Image 2026-06-29 at 15.49.38 (2).jpeg",
    alt: "The house on its site, view three.",
    label: "Plate V — The Site",
    caption: "Terracotta against the green.",
    ratio: "portrait",
  },
  {
    id: "site-4",
    src: "/images/site/WhatsApp Image 2026-06-29 at 15.49.40 (2).jpeg",
    alt: "The house on its site, view four.",
    label: "Plate V — The Site",
    caption: "The approach.",
    ratio: "landscape",
  },
  {
    id: "site-5",
    src: "/images/site/WhatsApp Image 2026-06-29 at 15.49.40.jpeg",
    alt: "The house on its site, view five.",
    label: "Plate V — The Site",
    caption: "Light on the facade.",
    ratio: "portrait",
  },
];

export const record: { term: string; detail: string }[] = [
  { term: "Location", detail: "Siolim, Goa" },
  { term: "Land area", detail: "777 sqm" },
  { term: "Living area", detail: "8077 sqft" },
  { term: "Levels", detail: "Ground + 2 Mansion" },
  { term: "Bedrooms", detail: "6 Bedrooms + 1 Den Room" },
  { term: "Bathrooms", detail: "7 Bathrooms" },
  { term: "Completion Date", detail: "September, 2026" },
  { term: "Asking Price", detail: "15.5 Cr" },
];

export const nav = [
  { href: "#house", label: "The House" },
  { href: "#gallery", label: "Gallery" },
  { href: "#spaces", label: "Spaces" },
  { href: "#site", label: "The Site" },
  { href: "#record", label: "The Record" },
  { href: "#viewing", label: "Viewing" },
];

export const footerNote =
  "Every image is real — renders and photographs of the house as it stands.";
