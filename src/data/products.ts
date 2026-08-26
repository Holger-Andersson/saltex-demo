// Statisk produktdata (mockdata) som används av demot i väntan på en riktig datakälla.
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "fjadergunga-bil",
    name: "Fjädergunga Bil",
    description:
      "Fjädergunga Bil (artikelnummer BLFJ535) är en TÜV-certifierad fjädergunga med handtag och fotstöd, formad som en bil för balans- och koordinationsträning.",
    details: [
      "Fjädergunga – bil (artikelnummer BLFJ535) är en offentlig lekplatsanordning som utvecklar barns balans- och koordination. Den TÜV-certifierade fjädergungan är utrustad med handtag och fotstöd, och dess estetiska linjer drar blickarna till sig.",
      "Tack vare utmärkta fjädringsegenskaper ger den underhållsfria produkten nya upplevelser.",
      "Den EU-standardiserade metallanordningen har lång livslängd, uppfyller kraven i EN 1176-1:2018 och EN 1176-6:2017+AC:2019 – går att beställa i önskad färg.",
    ],
    category: "swings",
    price: 42900,
    images: ["/images/products/fjädergunga_lekplatsutrusning_saltex.png"],
    model3d: {
      url: "/models/fjäder-bil.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/fjader-gunga/BLFJ535_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/fjader-gunga/BLFJ535_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning",
        href: "/documents/fjader-gunga/BFJ535.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "90 cm",
      width: "52 cm",
      length: "116 cm",
      safetyZone: "316x252 cm",
      ageRange: "2–8 år",
      capacity: 1,
    },
    featured: true,
  },
  {
    id: "2",
    slug: "sandbord-multivaning",
    name: "Sandbord Multivåning",
    description:
      "Sandbord Multivåning (artikelnummer BLFJ407) är ett rullstolsanpassat sandbord som gör det möjligt för fler barn att leka med sand sittande eller stående.",
    details: [
      "Tillgängligt multivåningssandbord (artikelnummer BLFJ407) är en specialutformad, underhållsfri playbordslösning som gör det möjligt för barn i rullstol eller med begränsad rörlighet att leka med sand bekvämt, sittande eller stående.",
      "Bordet har höjda kanter för enkel åtkomst och är konstruerat för både individuell och grupplek.",
      "Benstommen är av galvaniserat och pulverlackerat metallrör, övriga delar av UV-beständigt HDPE-material.",
      "Den TÜV-certifierade produkten uppfyller kraven i EN 1176-1:2018 – går att beställa i önskad färg. Produkten är designad för långvarig användning i tuffa offentliga miljöer.",
    ],
    category: "accessories",
    price: 8900,
    images: ["/images/products/sandbord-multivaning.webp"],
    model3d: {
      url: "/models/sandbord-multivaning.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/sandbord-multivaning/BLFJ407_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/sandbord-multivaning/BLFJ407_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning (2D)",
        href: "/documents/sandbord-multivaning/FLFJ407.dwg",
        format: "DWG",
      },
      {
        label: "Ritning (3D)",
        href: "/documents/sandbord-multivaning/BLFJ407_3D.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "95 cm",
      width: "152 cm",
      length: "280 cm",
      safetyZone: "580x452 cm",
      ageRange: "1–10 år",
      capacity: 3,
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
    id: "4",
    slug: "gungstallning-kombinerad",
    name: "Gungställning I – Kombinerad gunga",
    description:
      "Gungställning I – Kombinerad gunga (artikelnummer BLFJ109B) är en TÜV-certifierad gungställning med knägunga, babysitsgunga och redetsgunga för upp till sex barn samtidigt.",
    details: [
      "Kombinerad gungställning (artikelnummer BLFJ109B) är en upphängd gungställning med en knägunga, en vaggande babysitsgunga och en redetsgunga, vilket gör att upp till sex personer kan leka samtidigt.",
      "Tack vare ytbehandlingen på den TÜV-certifierade konstruktionen har den hög motståndskraft mot yttre påverkan, och genom sin underhållsfria design kräver enheten minimalt med skötsel.",
      "Den EU-standardiserade utrustningen är ett idealiskt val för offentliga lekplatser, uppfyller kraven i EN 1176-1:2018 och EN 1176-2:2017+AC:2020, och finns i önskad färg.",
    ],
    category: "swings",
    price: 12400,
    images: ["/images/products/stor-gungstallning.webp"],
    model3d: {
      url: "/models/stor-gungställning.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/stor-gungstallning/BLFJ109B_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/stor-gungstallning/BLFJ109B_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning (2D)",
        href: "/documents/stor-gungstallning/BLFJ109B.dwg",
        format: "DWG",
      },
      {
        label: "Ritning (3D)",
        href: "/documents/stor-gungstallning/BLFJ109B_3D.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "228 cm",
      width: "203 cm",
      length: "640 cm",
      safetyZone: "739x563 cm",
      ageRange: "1–14 år",
      capacity: 6,
    },
    featured: true,
  },
  {
    id: "5",
    slug: "linbana-enkel",
    name: "Linbana Enkel",
    description:
      "Linbana Enkel (artikelnummer BLFJ201B) är en TÜV-certifierad linbana med start- och mottagningstorn samt dämpande fjäderbroms för säker inbromsning.",
    details: [
      "Linbana (artikelnummer BLFJ201B) är en populär lekplatsanordning. Produkten består av ett starttorn och ett mottagningstorn med halksäker plattform, installerade på olika höjder för optimal glid.",
      "Vid mottagningsstornet finns en dämpande fjäder som bromsar åkaren ungefär halvvägs om den träffas.",
      "Ramen är av metall, övriga delar av UV-beständigt HDPE-material, och utrustningen uppfyller alla säkerhetsföreskrifter.",
      "Den TÜV-certifierade linbanan inkluderar vagn, vajer, spiralfjäderbroms, spännare, vajerfäste och gummiknäpp, och uppfyller kraven i EN 1176-1:2018 och EN 1176-4:2018 – går att beställa i önskad färg.",
    ],
    category: "playgrounds",
    price: 94500,
    images: ["/images/products/linbana-enkel.webp"],
    model3d: {
      url: "/models/linbana-enkel.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/linbana-enkel/BLFJ201B_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/linbana-enkel/BLFJ201B_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning (2D)",
        href: "/documents/linbana-enkel/BLFJ201B.dwg",
        format: "DWG",
      },
      {
        label: "Ritning (3D)",
        href: "/documents/linbana-enkel/BLFJ201B_3D.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "316 cm",
      width: "366 cm",
      length: "2664 cm",
      safetyZone: "2683x400 cm",
      ageRange: "3–14 år",
      capacity: 1,
    },
  },
  {
    id: "12",
    slug: "trippel",
    name: "Trippel",
    description:
      "Trippel (artikelnummer BLFJ732) är en tredelad utbildningspanel med labyrintspel, abakusspel och skjutbar spelpanel — åtkomlig från båda sidor för lek i par.",
    details: [
      "Trippelpanel (artikelnummer BLFJ732) är en offentlig lekplatsanordning som fungerar som en tredelad utbildningspanel. Den TÜV-certifierade produkten består av ett labyrintspel, ett abakusliknande spel och en skjutbar spelpanel.",
      "Den underhållsfria panelen är åtkomlig från båda sidor, så upp till sex barn kan leka samtidigt. Panelen är rullstolsanpassad, vilket gör den tillgänglig för fler besökare på lekplatsen.",
      "Stommen är av galvaniserat och elektrostatisk pulverlackerat metall, och panelerna är av UV-beständigt HDPE-material.",
      "Installationen rekommenderas vid byggnation av offentliga lekplatser – går att beställa i önskad färg.",
    ],
    category: "accessories",
    price: 6900,
    images: ["/images/products/Trippel.webp"],
    model3d: {
      url: "/models/trippel.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/trippel/BLFJ732_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/trippel/BLFJ732_EN.pdf",
        format: "PDF",
      },
    ],
    specifications: {
      height: "111 cm",
      width: "12 cm",
      length: "328 cm",
      safetyZone: "628x312 cm",
      ageRange: "1–14 år",
      capacity: 6,
    },
  },
  {
    id: "10",
    slug: "skogskoja-w",
    name: "Skogskoja W",
    description:
      "Skogskoja W (artikelnummer BLFJ736W) är en underhållsfri lekstuga med spelbord och räkneram, utformad för mindre barn och lekytor med begränsat utrymme.",
    details: [
      "Skogskoja W (artikelnummer BLFJ736W) är en lekstuga med ram i metall, täckt med varmförzinkad och elektrostatisk pulverlackerad yta som ger både hållbarhet och ett estetiskt uttryck. Den underhållsfria lekstugan är utformad för offentliga lekplatser och erbjuder barn en inspirerande lekmiljö med spelbord och räkneram som stimulerar finmotorik, rollek och visuell utforskning.",
      "Produkten är utvecklad med fokus på mindre barn och för lekytor med begränsat utrymme. Skogskoja W är TÜV-certifierad och uppfyller kraven i EN 1176-1:2018 – ett utmärkt val för EU-standardiserade lekplatser.",
    ],
    category: "playgrounds",
    price: 22900,
    images: ["/images/products/skogskoja-w.webp"],
    model3d: {
      url: "/models/skogskoja-w.glb",
    },
    downloads: [
      {
        label: "Produktblad (SV)",
        href: "/documents/skogskoja-w/BLFJ736W_SE.pdf",
        format: "PDF",
      },
      {
        label: "Produktblad (EN)",
        href: "/documents/skogskoja-w/BLFJ736W_EN.pdf",
        format: "PDF",
      },
      {
        label: "Ritning (topp)",
        href: "/documents/skogskoja-w/BLFJ736W_TOP.dwg",
        format: "DWG",
      },
    ],
    specifications: {
      height: "177 cm",
      width: "123 cm",
      length: "116 cm",
      safetyZone: "416x413 cm",
      ageRange: "1–10 år",
      capacity: 3,
    },
  },
];
