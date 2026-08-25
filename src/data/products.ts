// Statisk produktdata (mockdata) som används av demot i väntan på en riktig datakälla.
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "cirkus",
    name: "Cirkus",
    description:
      "Cirkusinspirerad lekplatspaviljong med tak, bänkar runt om och lekfulla cirkusmotiv. En omtyckt samlingsplats och mötesplats för de yngsta barnen.",
    category: "playgrounds",
    price: 42900,
    images: ["/images/products/A-10-430x344.webp"],
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
    slug: "balansbana-rak",
    name: "Balansbana Rak",
    description:
      "Rak balansbana med hängbro, tunnel och klätternät i änden. Tränar barns balans, motorik och mod längs en sammanhängande bana.",
    category: "playgrounds",
    price: 68900,
    images: ["/images/products/F-5.webp"],
    specifications: {
      height: "1.6 m",
      width: "0.6 m",
      length: "7.0 m",
      ageRange: "4–10 år",
      capacity: 4,
    },
  },
  {
    id: "11",
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
    slug: "enkel-klattring",
    name: "Enkel klättring",
    description:
      "Kompakt lekställning med rutschkana, klättervägg och labyrintpanel. Ett prisvärt förstaval för mindre gårdar och entréer.",
    category: "climbing",
    price: 15900,
    images: ["/images/products/enkelklätter.webp"],
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
    slug: "hammockgunga",
    name: "Hammockgunga",
    description:
      "Repspänd hammockgunga där flera barn kan ligga eller sitta samtidigt. Den generösa liggytan gör den till en social mötesplats på lekplatsen.",
    category: "swings",
    price: 12400,
    images: ["/images/products/C-5-430x344.webp"],
    specifications: {
      height: "1.8 m",
      width: "1.0 m",
      length: "2.8 m",
      ageRange: "3–12 år",
      capacity: 3,
    },
    featured: true,
  },
  {
    id: "5",
    slug: "rutschkombo-twin",
    name: "Rutschkombo Twin",
    description:
      "Kombinationslekplats med två lektorn, förbindande tunnel och en rutschkana på vardera sida. Ger dubbelt så mycket lek på liten yta.",
    category: "playgrounds",
    price: 18700,
    images: ["/images/products/BLFJ012W.webp"],
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
    images: ["/images/products/kids-spiral-slide-500x500.webp"],
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
      "Flervånings klättertorn med klättervägg, förbindande tunnel och takförsedd utsiktsplattform. Utformat för att utmana motorik och balans på ett säkert sätt.",
    category: "climbing",
    price: 54900,
    images: ["/images/products/BLFJ040_2-430x344.webp"],
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
      "Fristående klätternät i kraftigt rep, spänt mellan stålpelare. Ger en dynamisk klätterupplevelse som skiljer sig från traditionella klätterställningar.",
    category: "climbing",
    price: 31200,
    images: ["/images/products/N-3.webp"],
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
    slug: "rundbank",
    name: "Rundbänk",
    description:
      "S-formad sittbänk i trä och gabion som slingrar sig runt ett träd eller en planting. Ger gott om sittplatser för vårdnadshavare utan att ta extra markyta.",
    category: "accessories",
    price: 6900,
    images: ["/images/products/bench-park.svg.jpg"],
    specifications: {
      height: "0.8 m",
      width: "0.6 m",
      length: "1.8 m",
      capacity: 3,
    },
  },
  {
    id: "10",
    slug: "lekskepp",
    name: "Lekskepp",
    description:
      "Skeppsformad lekplats i trä med kikhål, djurmotiv och flera däcksnivåer att utforska. Fantasifull lek för hela gänget i en och samma struktur.",
    category: "playgrounds",
    price: 47500,
    images: ["/images/products/D-8-430x344.webp"],
    specifications: {
      height: "2.2 m",
      width: "2.5 m",
      length: "5.5 m",
      ageRange: "3–10 år",
      capacity: 8,
    },
  },
];
