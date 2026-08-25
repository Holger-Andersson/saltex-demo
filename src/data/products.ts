import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "lekland-mini",
    name: "Lekland Mini",
    description:
      "En kompakt lekplatsmodul som samlar rutschkana, klätterparti och lekhus i en enda, yteffektiv struktur. Perfekt för mindre gårdar och förskolemiljöer.",
    category: "playgrounds",
    price: 42900,
    images: ["/images/products/lekland-mini.svg"],
    specifications: {
      height: "2.4 m",
      width: "3.0 m",
      length: "4.2 m",
      ageRange: "2–8 år",
      capacity: 6,
    },
    featured: true,
  },
  {
    id: "2",
    slug: "skogslektorn-tunnel-rutschkana",
    name: "Skogslektorn med tunnel och rutschkana",
    description:
      "BLFJ048 är ett certifierat, underhållsfritt skogslektorn i varmförzinkat och pulverlackerat stål samt UV-beständigt HDPE med två torn, rutschkana, klättervägg, tunnel och interaktiv labyrintpanel enligt EN 1176-standarderna – går att beställa i önskad färg.",
    details: [
      "Skogslektorn med tunnel och rutschkana i rostfritt stål (artikelnummer BLFJ048) är en offentlig lekplatsanordning som kombinerar rutschning, klättring, kryplek och interaktiv lek. Produkten ingår i Skogsserien och har en naturinspirerad utformning som passar på offentliga lekplatser samt i förskole- och skolmiljöer.",
      "Lekställningen består av två torn som sammanbinds av en tunnel. Tunneln skapar en spännande passage mellan tornen och uppmuntrar till krypning, gömlek och utforskande. En klättervägg och ett klätterelement ger barnen olika vägar upp och bidrar till att utveckla styrka, koordination och motorik.",
      "Rutschkanan har en glidyta av rostfritt stål och utgår från en plattformshöjd på 90 cm. Den interaktiva labyrintpanelen erbjuder taktil och visuell stimulans, medan fågelmataren och de naturinspirerade detaljerna ger möjlighet till lugnare lek och lärande om skogens djurliv.",
      "Den certifierade och underhållsfria lekplatsutrustningen har en robust konstruktion av varmförzinkat och pulverlackerat kolstål. Sidopaneler, tak och dekorativa element är tillverkade av UV-beständigt HDPE-material. Plattformarna har halkskyddade ytor, tunneln består av ett slitstarkt korrugerat PP-rör och rutschkanan har en glidyta av rostfritt stål. Samtliga fästelement är tillverkade av rostfritt stål.",
      "Lekställningen är dekorerad med björk-, busk- och lövmotiv samt skogsdjur som uggla, räv, igelkott och padda.",
      "Produkten uppfyller kraven i EN 1176-1:2017+A1:2024 och EN 1176-3:2018 – går att beställa i önskad färg.",
      "Ett varierat skogslektorn med tunnel, klättring och rutschkana som uppmuntrar till rörelse och utforskande.",
    ],
    category: "playgrounds",
    price: 68900,
    images: [
      "/images/products/BFLFJ048_1.webp",
      "/images/products/BLFJ048_2.webp",
    ],
    model3d: {
      url: "/models/lekland-xl.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/skogslektorn-tunnel-rutschkana/BLFJ013_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/skogslektorn-tunnel-rutschkana/BLFJ013_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning (topp)",
        href: "/documents/skogslektorn-tunnel-rutschkana/BLFJ013_top.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "257 cm",
      width: "215 cm",
      length: "288 cm",
      safetyZone: "548x518 cm",
      ageRange: "2–10 år",
      capacity: 7,
    },
  },
  {
    id: "3",
    slug: "swing-duo",
    name: "Gungställning Duo",
    description:
      "Klassisk gungställning i pulverlackerat stål med två gungsitsar. Robust konstruktion med mjuka, väderbeständiga upphängningar.",
    category: "swings",
    price: 15900,
    images: ["/images/products/swing-duo.svg"],
    specifications: {
      height: "2.2 m",
      width: "0.9 m",
      length: "3.4 m",
      ageRange: "3–10 år",
      capacity: 2,
    },
  },
  {
    id: "4",
    slug: "swing-nest",
    name: "Fågelbogunga",
    description:
      "Rund korggunga som ger plats för flera barn samtidigt. En av våra mest populära produkter tack vare den sociala gungupplevelsen.",
    category: "swings",
    price: 12400,
    images: ["/images/products/swing-nest.svg"],
    specifications: {
      height: "2.0 m",
      width: "1.2 m",
      length: "1.2 m",
      ageRange: "3–12 år",
      capacity: 3,
    },
    featured: true,
  },
  {
    id: "5",
    slug: "slide-wave",
    name: "Vågrutschkana",
    description:
      "Fristående rutschkana med vågformad bana som ger extra fart och skoj. Halksäker yta och förstärkta kanter genomgående.",
    category: "slides",
    price: 18700,
    images: ["/images/products/slide-wave.svg"],
    specifications: {
      height: "1.8 m",
      width: "0.8 m",
      length: "3.8 m",
      ageRange: "3–10 år",
      capacity: 1,
    },
  },
  {
    id: "6",
    slug: "slide-spiral",
    name: "Spiralrutschkana",
    description:
      "Spiralformad rutschkana i rostfritt stål som sparar markyta samtidigt som den ger en längre, mer spännande åkning.",
    category: "slides",
    price: 24500,
    images: ["/images/products/slide-spiral.svg"],
    specifications: {
      height: "2.6 m",
      width: "1.4 m",
      length: "1.4 m",
      ageRange: "4–12 år",
      capacity: 1,
    },
  },
  {
    id: "7",
    slug: "climbing-tower",
    name: "Klättertorn",
    description:
      "Flervånings klättertorn med repbroar, klätterväggar och utsiktsplattform. Utformat för att utmana motorik och balans på ett säkert sätt.",
    category: "climbing",
    price: 54900,
    images: ["/images/products/climbing-tower.svg"],
    specifications: {
      height: "3.8 m",
      width: "3.0 m",
      length: "3.0 m",
      ageRange: "5–14 år",
      capacity: 8,
    },
    featured: true,
  },
  {
    id: "8",
    slug: "climbing-net",
    name: "Klätternät",
    description:
      "Fristående klätternät i kraftigt rep, spänt mellan tre stålpelare. Ger en dynamisk klätterupplevelse som skiljer sig från traditionella klätterställningar.",
    category: "climbing",
    price: 31200,
    images: ["/images/products/climbing-net.svg"],
    specifications: {
      height: "2.8 m",
      width: "3.5 m",
      length: "3.5 m",
      ageRange: "4–12 år",
      capacity: 6,
    },
  },
  {
    id: "9",
    slug: "bench-park",
    name: "Parkbänk",
    description:
      "Väderbeständig parkbänk i trä och stål som kompletterar lekplatsen med sittplatser för vårdnadshavare. Enkel att placera var som helst på anläggningen.",
    category: "accessories",
    price: 6900,
    images: ["/images/products/bench-park.svg"],
    specifications: {
      height: "0.8 m",
      width: "0.6 m",
      length: "1.8 m",
      capacity: 3,
    },
  },
  {
    id: "10",
    slug: "fence-safety",
    name: "Säkerhetsstaket",
    description:
      "Modulärt staket i pulverlackerat stål som avgränsar lekytan på ett tydligt och säkert sätt utan att kännas instängande.",
    category: "accessories",
    price: 4200,
    images: ["/images/products/fence-safety.svg"],
    specifications: {
      height: "0.9 m",
      width: "0.05 m",
      length: "2.0 m",
    },
  },
];
