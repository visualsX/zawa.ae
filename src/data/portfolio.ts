import remiImage from "../assets/portfolio/remi-scape.jpeg";
import remiBefore1 from "../assets/portfolio/remi-before.jpeg";
import remiBefore2 from "../assets/portfolio/remi-before2.jpeg";
import remiAfter7 from "../assets/portfolio/remi-4.jpeg";
import remiAfter1 from "../assets/portfolio/remi-pool.jpeg";
import remiAfter2 from "../assets/portfolio/remi-steps.jpeg";
import remiAfter3 from "../assets/portfolio/remi-steps-landscape.jpeg";
import remiAfter4 from "../assets/portfolio/remi1.jpeg";
import remiAfter5 from "../assets/portfolio/remi2.jpeg";
import remiAfter6 from "../assets/portfolio/remi3.jpeg";
import remiAfter8 from "../assets/portfolio/remi-scape.jpeg";

import khalifaImage from "../assets/portfolio/khalifa1.jpeg";
import khalifa1 from "../assets/portfolio/khalifa1.jpeg";
import khalifa2 from "../assets/portfolio/khalifa2.jpeg";
import khalifa3 from "../assets/portfolio/khalifa3.jpeg";
import khalifa4 from "../assets/portfolio/khalifa4.jpeg";

// import mehdiImage from "../assets/portfolio/mehdi7.jpeg";
import mehdiBefore1 from "../assets/portfolio/mehdi10.jpeg";
// import mehdiBefore2 from "../assets/portfolio/mehdi11.jpeg";
import mehdiAfter1 from "../assets/portfolio/mehdi8.jpeg";
import mehdiAfter2 from "../assets/portfolio/mehdi2.jpeg";
import mehdiAfter3 from "../assets/portfolio/mehdi3.jpeg";
import mehdiAfter4 from "../assets/portfolio/mehdi4.jpeg";
import mehdiAfter5 from "../assets/portfolio/mehdi5.jpeg";
import mehdiBefore3 from "../assets/portfolio/mehdi7.jpeg";
// import mehdiAfter8 from "../assets/portfolio/mehdi8.jpeg";
import mehdiAfter9 from "../assets/portfolio/mehdi9.jpeg";
import mehdiAfter6 from "../assets/portfolio/mehdi6.jpeg";

export const projects = [
  {
    slug: "tilal-al-ghaf-harmony-3",
    title: "Landscape Design & Swimming Pool",
    category: "Landscape Design",
    client: "Remi & Cristine",
    location: "Tilal Al Ghaf, Harmony 3 - Villa PV-26",
    description: "A comprehensive landscape transformation featuring a custom-designed swimming pool, elegant hardscaping, and beautiful greenery, creating a perfect outdoor retreat.",
    image: remiImage,
    gallery: [
      { when: "before", image: remiBefore1, caption: "Initial bare backyard" },
      { when: "before", image: remiBefore2, caption: "Unfinished side area" },
      { when: "after", image: remiAfter7, caption: "Lush greenery" },
      { when: "after", image: remiAfter1, caption: "Custom Swimming Pool" },
      { when: "after", image: remiAfter2, caption: "Elegant Hardscape Steps" },
      { when: "after", image: remiAfter3, caption: "Integrated Landscaping" },
      { when: "after", image: remiAfter4, caption: "Lush Greenery" },
      { when: "after", image: remiAfter5, caption: "Portable Plants" },
      { when: "after", image: remiAfter6, caption: "Lush Greenery" },
      { when: "after", image: remiAfter8, caption: "Lush Greenery" },
    ],
    outcomes: [
      "Custom swimming pool installation",
      "Elegant hardscape and step design",
      "Lush, low-maintenance landscaping"
    ],
    caseStudy: {
      challenge: "The client wanted to transform their bare backyard into a luxurious outdoor living space with a swimming pool, while dealing with the constraints of the villa's plot in Tilal Al Ghaf.",
      solution: "We designed a cohesive landscape plan that maximized the available space, incorporating a sleek swimming pool, durable hardscaping for walkways and steps, and strategic planting for privacy and aesthetics.",
      result: "The result is a stunning, resort-like backyard that perfectly complements the Harmony 3 villa, providing an ideal space for both relaxation and entertaining."
    }
  },
  {
    slug: "al-awir-green-house",
    title: "Green House Hydroponic System",
    category: "Ag-Tech Solutions",
    client: "Khalifa",
    location: "Al Awir 2 Dubai, Khalifa Farm",
    description: "Installation of a state-of-the-art greenhouse with an advanced hydroponic system at Khalifa Farm, designed for efficient and sustainable year-round farming.",
    image: khalifaImage,
    gallery: [
      { when: "after", image: khalifa1, caption: "Greenhouse exterior" },
      { when: "after", image: khalifa2, caption: "Hydroponic growing system" },
      { when: "after", image: khalifa3, caption: "Climate control setup" },
      { when: "after", image: khalifa4, caption: "Nutrient delivery lines" },
    ],
    outcomes: [
      "High-yield hydroponic crop production",
      "Climate-controlled greenhouse environment",
      "Optimized water and nutrient usage"
    ],
    caseStudy: {
      challenge: "The client needed a modern agricultural solution to grow crops efficiently in the challenging climate of Al Awir, Dubai, requiring precise control over environmental factors.",
      solution: "We constructed a specialized greenhouse equipped with a comprehensive hydroponic system, allowing for soil-less cultivation with automated nutrient delivery and climate management.",
      result: "The new facility enables high-density, sustainable farming with significantly reduced water consumption, ensuring consistent and high-quality produce yields year-round."
    }
  },
  {
    slug: "palm-jumeirah-landscape",
    title: "Landscape & Hardscape Design",
    category: "Landscape Design",
    client: "Mehdi Mansoor",
    location: "Palm Jumeirah, Fond - M - 146 Dubai",
    description: "Premium landscaping and hardscaping project at a prestigious Palm Jumeirah property, enhancing the outdoor aesthetics and functionality.",
    image: mehdiAfter1,
    gallery: [
      { when: "before", image: mehdiBefore3, caption: "Pruning In Progress" },
      { when: "before", image: mehdiBefore1, caption: "Rough Look at the begining" },
      // { when: "before", image: mehdiBefore2, caption: "Pre-landscaping ground" },
      { when: "after", image: mehdiAfter1, caption: "Completed Pathways" },
      { when: "after", image: mehdiAfter2, caption: "Coastal Plants" },
      { when: "after", image: mehdiAfter3, caption: "Hardscaping Elements" },
      { when: "after", image: mehdiAfter4, caption: "Refined Outdoor Aesthetics" },
      { when: "after", image: mehdiAfter5, caption: "Refined Outdoor Aesthetics" },
      { when: "after", image: mehdiAfter6, caption: "Refined Outdoor Aesthetics" },
      { when: "after", image: mehdiAfter9, caption: "Refined Outdoor Aesthetics" },
      // { when: "after", image: mehdiAfter10, caption: "Refined outdoor aesthetics" },
    ],
    outcomes: [
      "Bespoke hardscape design",
      "Premium plant selection suited for coastal environment",
      "Enhanced property curb appeal"
    ],
    caseStudy: {
      challenge: "The client desired a sophisticated outdoor space for their Palm Jumeirah residence that would match the exclusivity of the location while withstanding the coastal environment.",
      solution: "We developed a detailed landscape and hardscape plan, utilizing high-quality materials resistant to coastal wear, and selected flora that thrives in the specific microclimate of the Palm.",
      result: "The transformed property boasts a stunning, resilient landscape that offers both privacy and luxury, perfectly aligning with the client's vision for their high-end home."
    }
  }
];
