import type { ImageMetadata } from "astro";

import remiCover from "../assets/portfolio/remi-scape.jpeg";
import remiBefore1 from "../assets/portfolio/remi-before.jpeg";
import remiBefore2 from "../assets/portfolio/remi-before2.jpeg";
import remiPoolEnd from "../assets/portfolio/remi-4.jpeg";
import remiPool from "../assets/portfolio/remi-pool.jpeg";
import remiSteps from "../assets/portfolio/remi-steps.jpeg";
import remiStepsWide from "../assets/portfolio/remi-steps-landscape.jpeg";
import remiGarden from "../assets/portfolio/remi1.jpeg";
import remiOlive from "../assets/portfolio/remi2.jpeg";
import remiSideGarden from "../assets/portfolio/remi3.jpeg";

import khalifaTowers from "../assets/portfolio/khalifa1.jpeg";
import khalifaTowersRow from "../assets/portfolio/khalifa2.jpeg";
import khalifaCrop from "../assets/portfolio/khalifa3.jpeg";
import khalifaTowersWide from "../assets/portfolio/khalifa4.jpeg";

import mehdiPool from "../assets/portfolio/mehdi2.jpeg";
import mehdiLounge from "../assets/portfolio/mehdi10.jpeg";
import mehdiPathway from "../assets/portfolio/mehdi11.jpeg";
import mehdiDining from "../assets/portfolio/mehdi3.jpeg";
import mehdiSeaBench from "../assets/portfolio/mehdi4.jpeg";
import mehdiPoolGarden from "../assets/portfolio/mehdi5.jpeg";
import mehdiTopiary from "../assets/portfolio/mehdi6.jpeg";
import mehdiPruning from "../assets/portfolio/mehdi7.jpeg";
import mehdiPanorama from "../assets/portfolio/mehdi8.jpeg";
import mehdiOlive from "../assets/portfolio/mehdi9.jpeg";

export type GalleryStage = "before" | "after";

export interface GalleryItem {
  when: GalleryStage;
  image: ImageMetadata;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Landscape Design" | "Ag-Tech Solutions";
  client: string;
  location: string;
  area: string;
  description: string;
  image: ImageMetadata;
  scope: string[];
  gallery: GalleryItem[];
  /** Optional matched before/after pair, shown as a drag-to-compare slider. */
  comparison?: {
    before: ImageMetadata;
    after: ImageMetadata;
    caption: string;
  };
  outcomes: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    slug: "tilal-al-ghaf-harmony-3",
    title: "Landscape Design & Swimming Pool",
    category: "Landscape Design",
    client: "Remi & Cristine",
    location: "Tilal Al Ghaf, Harmony 3 - Villa PV-26",
    area: "Tilal Al Ghaf",
    description:
      "A comprehensive landscape transformation featuring a custom-designed swimming pool, elegant hardscaping, and beautiful greenery, creating a perfect outdoor retreat.",
    image: remiCover,
    scope: ["Landscape design", "Swimming pool", "Hardscape", "Softscape"],
    comparison: {
      before: remiBefore1,
      after: remiSideGarden,
      caption: "Side garden along the boundary wall",
    },
    gallery: [
      { when: "before", image: remiBefore1, caption: "Bare side yard during construction" },
      { when: "before", image: remiBefore2, caption: "Palms staged before planting" },
      { when: "after", image: remiPool, caption: "Custom swimming pool" },
      { when: "after", image: remiCover, caption: "Layered planting & flowering beds" },
      { when: "after", image: remiSteps, caption: "Stepping-stone garden path" },
      { when: "after", image: remiPoolEnd, caption: "Pool deck & pergola" },
      { when: "after", image: remiStepsWide, caption: "Feature olive tree & stepping stones" },
      { when: "after", image: remiOlive, caption: "Sculpted olive in a timber planter" },
      { when: "after", image: remiGarden, caption: "Integrated lawn & planting" },
      { when: "after", image: remiSideGarden, caption: "Finished side garden" },
    ],
    outcomes: [
      "Custom swimming pool installation",
      "Elegant hardscape and step design",
      "Lush, low-maintenance landscaping",
    ],
    caseStudy: {
      challenge:
        "The client wanted to transform their bare backyard into a luxurious outdoor living space with a swimming pool, while dealing with the constraints of the villa's plot in Tilal Al Ghaf.",
      solution:
        "We designed a cohesive landscape plan that maximized the available space, incorporating a sleek swimming pool, durable hardscaping for walkways and steps, and strategic planting for privacy and aesthetics.",
      result:
        "The result is a stunning, resort-like backyard that perfectly complements the Harmony 3 villa, providing an ideal space for both relaxation and entertaining.",
    },
  },
  {
    slug: "al-awir-green-house",
    title: "Green House Hydroponic System",
    category: "Ag-Tech Solutions",
    client: "Khalifa",
    location: "Al Awir 2 Dubai, Khalifa Farm",
    area: "Al Awir",
    description:
      "Installation of a state-of-the-art greenhouse with an advanced hydroponic system at Khalifa Farm, designed for efficient and sustainable year-round farming.",
    image: khalifaCrop,
    scope: ["Greenhouse construction", "Hydroponics", "Climate control", "Irrigation"],
    gallery: [
      { when: "after", image: khalifaCrop, caption: "Leafy greens under climate control" },
      { when: "after", image: khalifaTowers, caption: "Hydroponic grow boxes & towers" },
      { when: "after", image: khalifaTowersRow, caption: "Vertical hydroponic towers" },
      { when: "after", image: khalifaTowersWide, caption: "Nutrient delivery lines" },
    ],
    outcomes: [
      "High-yield hydroponic crop production",
      "Climate-controlled greenhouse environment",
      "Optimized water and nutrient usage",
    ],
    caseStudy: {
      challenge:
        "The client needed a modern agricultural solution to grow crops efficiently in the challenging climate of Al Awir, Dubai, requiring precise control over environmental factors.",
      solution:
        "We constructed a specialized greenhouse equipped with a comprehensive hydroponic system, allowing for soil-less cultivation with automated nutrient delivery and climate management.",
      result:
        "The new facility enables high-density, sustainable farming with significantly reduced water consumption, ensuring consistent and high-quality produce yields year-round.",
    },
  },
  {
    slug: "palm-jumeirah-landscape",
    title: "Landscape & Hardscape Design",
    category: "Landscape Design",
    client: "Mehdi Mansoor",
    location: "Palm Jumeirah, Fond - M - 146 Dubai",
    area: "Palm Jumeirah",
    description:
      "Premium landscaping and hardscaping project at a prestigious Palm Jumeirah property, enhancing the outdoor aesthetics and functionality.",
    image: mehdiPool,
    scope: ["Landscape design", "Hardscape", "Topiary", "Coastal planting"],
    gallery: [
      { when: "before", image: mehdiPruning, caption: "Topiary pruning in progress" },
      { when: "before", image: mehdiLounge, caption: "The garden at the beginning" },
      { when: "after", image: mehdiPool, caption: "Poolside planting with sea views" },
      { when: "after", image: mehdiPanorama, caption: "Bonsai & cactus garden lounge" },
      { when: "after", image: mehdiOlive, caption: "Sculpted olive & topiary garden" },
      { when: "after", image: mehdiPathway, caption: "Completed pathways & planters" },
      { when: "after", image: mehdiSeaBench, caption: "Hedge-lined seafront bench" },
      { when: "after", image: mehdiDining, caption: "Outdoor dining terrace" },
      { when: "after", image: mehdiTopiary, caption: "Cloud-pruned topiary" },
      { when: "after", image: mehdiPoolGarden, caption: "Refined pool garden" },
    ],
    outcomes: [
      "Bespoke hardscape design",
      "Premium plant selection suited for coastal environment",
      "Enhanced property curb appeal",
    ],
    caseStudy: {
      challenge:
        "The client desired a sophisticated outdoor space for their Palm Jumeirah residence that would match the exclusivity of the location while withstanding the coastal environment.",
      solution:
        "We developed a detailed landscape and hardscape plan, utilizing high-quality materials resistant to coastal wear, and selected flora that thrives in the specific microclimate of the Palm.",
      result:
        "The transformed property boasts a stunning, resilient landscape that offers both privacy and luxury, perfectly aligning with the client's vision for their high-end home.",
    },
  },
];
