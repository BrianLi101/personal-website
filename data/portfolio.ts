export type BeliefId = "climate-economics" | "beyond-gpus" | "exceptional-founders";

export type Belief = {
  id: BeliefId;
  number: string;
  motto: string;
  opinion?: string;
};

export type Company = {
  id: string;
  name: string;
  industry: "AI" | "Biotech" | "Climate" | "Hardware" | "Health" | "Robotics" | "Space" | "Software";
  year: string;
  stage: string;
  description: string;
  beliefs: BeliefId[];
  thesis: string;
  founderInsight: string;
  accent: "blue" | "amber" | "violet" | "green" | "silver" | "rose";
  draft?: boolean;
  website?: string;
  image?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};

// Longer opinions can be added one by one without changing the belief strip.
export const beliefs: Belief[] = [
  {
    id: "climate-economics",
    number: "01",
    motto: "Climate change requires climate economics",
  },
  {
    id: "beyond-gpus",
    number: "02",
    motto: "Computing evolves beyond GPUs",
  },
  {
    id: "exceptional-founders",
    number: "03",
    motto: "Exceptional founders",
  },
];

export const companies: Company[] = [
  {
    id: "6thsense",
    name: "6thSense",
    industry: "Robotics",
    year: "2026",
    stage: "Angel",
    description: "Nervous System for Physical AI",
    beliefs: ["exceptional-founders"],
    thesis: "Frontier and robotics labs have an insatiable demand for data right now, but every company is putting cameras on head mounts in factories and selling the data. 6thSense gloves capture force sensor data that can create a model of how objects should be gripped. And it was a product I could see myself using!",
    founderInsight: "When you embed sufficient force sensors into a glove, you can actually model the shape and weight of an object. If you then attach similar force “skin” to a robot, it can interpret the same data whether it has five grip points or two.",
    accent: "violet",
    website: "https://6thsense.dev/",
    image: "/companies/6thsense.webp",
    imagePosition: "58% center",
  },
  {
    id: "parasma",
    name: "Parasma",
    industry: "Biotech",
    year: "2026",
    stage: "Angel",
    description: "Replacing GPUs with human brain cells",
    beliefs: ["beyond-gpus", "exceptional-founders"],
    thesis: "Chips are still enormously inefficient at computation compared to biology. We’ve already been able to hook up brain cells to recognize images and play games. It’s time to bring those capabilities of forming new neural connections to AI.",
    founderInsight: "The limiting factor in brain-based chips isn’t the size of the cell culture, it is figuring how to effectively use those cells. Cortical Labs has built systems with millions of neurons without being able to effectively leverage them. Truly unlocking brain-based chips requires a tight coupling of the biology and the algorithms.",
    accent: "rose",
    website: "https://parasma.com/",
    image: "/companies/parasma.jpg",
  },
  {
    id: "gutgutgoose",
    name: "Gutgutgoose",
    industry: "Health",
    year: "2026",
    stage: "Angel",
    description: "We sequence your gut and build the probiotics it’s missing",
    beliefs: ["exceptional-founders"],
    thesis: "My friend has suffered from long-COVID induced chronic fatigue syndrome and the leading research theories point to disease survival in the gut. The gut is intricately tied to health issues yet finding simple at home testing does not exist. A consumer product that manages to build a foundational model of the gut will be critical in the detection of diseases.",
    founderInsight: "",
    accent: "green",
    website: "https://gutgutgoose.com/",
  },
  {
    id: "aerogen",
    name: "Aerogen",
    industry: "Hardware",
    year: "2026",
    stage: "Angel",
    description: "Eliminating the need for cleanrooms in semiconductor manufacturing",
    beliefs: ["exceptional-founders"],
    thesis: "As chips get smaller, the impact of each contaminant on a batch of chips grows larger and lowers yield. In order to maintain our pace of semiconductor density, we need a better system than clean rooms and pure nitrogen gas for squeezing out molecular contaminants.",
    founderInsight: "Every tool along the chip fab supply chain from ASML to Applied Materials has an incentive to increase the yield of their machine. The existing market for filtration is a fragmented set of legacy players that are reliant on HEPA filters and pumping costly purified nitrogen into FOUPs.",
    accent: "silver",
    website: "https://www.aerogensystems.com/",
    image: "/companies/aerogen.webp",
    imageFit: "contain",
  },
  {
    id: "meteoric",
    name: "Meteoric",
    industry: "Climate",
    year: "2026",
    stage: "Angel",
    description: "Drones that clear clouds over solar farms and weaken hurricanes",
    beliefs: ["climate-economics", "exceptional-founders"],
    thesis: "After the floods in Nepal, it became increasingly clear that weather modification will become part of our repertoire for dealing with climate change emergencies. But bringing it about will require either decisive action by centralized governments or companies that have figured out an economic model that allows them to fund the development of new technologies.",
    founderInsight: "Creating clouds to reflect sunlight requires dispersing chemicals and questionable economics. Clearing clouds can be done with electricity by charging water droplets and has clear economics of up to 22% of solar farm revenue in many regions.",
    accent: "blue",
    website: "https://meteoric.earth/",
    image: "/companies/meteoric.webp",
  },
  {
    id: "ethos-space-resources",
    name: "Ethos Space Resources",
    industry: "Space",
    year: "2026",
    stage: "Angel",
    description: "We make silicon on the Moon, to power everything in space.",
    beliefs: ["exceptional-founders"],
    thesis: "If the space economy is going to materialize, then the best way to grow it requires us to leverage resources in space instead of continuously punching holes in the atmosphere.",
    founderInsight: "",
    accent: "amber",
    website: "https://ethos-space.com/",
    image: "/companies/ethos-space.jpg",
    imagePosition: "center 36%",
  },
  {
    id: "kopra-bio",
    name: "Kopra Bio",
    industry: "Biotech",
    year: "2024",
    stage: "Angel",
    description: "Genetically engineered viruses that teach your immune system to kill cancer",
    beliefs: ["exceptional-founders"],
    thesis: "",
    founderInsight: "",
    accent: "rose",
    website: "https://www.kopra.bio/",
    image: "/companies/kopra-bio.jpg",
    imagePosition: "center 48%",
  },
  {
    id: "sygaldry",
    name: "Sygaldry",
    industry: "Hardware",
    year: "2025",
    stage: "Angel",
    description: "Quantum-accelerated AI servers",
    beliefs: ["beyond-gpus", "exceptional-founders"],
    thesis: "",
    founderInsight: "",
    accent: "violet",
    website: "https://sygaldry.com/",
    image: "/companies/sygaldry.png",
  },
  {
    id: "robo-robotics",
    name: "Robo Robotics",
    industry: "Robotics",
    year: "2026",
    stage: "Angel",
    description: "A teachable humanoid robot",
    beliefs: ["exceptional-founders"],
    thesis: "Don and Kyle previously hacked consumer growth to build an ed tech product reaching tens of thousands of students. Then they pivoted to the biggest challenges they could find and built a humanoid robot in a few months with no expertise. They learn faster and take more shots on goal than any other team I know.",
    founderInsight: "",
    accent: "silver",
    website: "https://robo.inc/",
    image: "/companies/robo-robotics.png",
    imagePosition: "center 38%",
  },
  {
    id: "exosat",
    name: "Exosat",
    industry: "Space",
    year: "2026",
    stage: "Angel",
    description: "Building a neutral, sovereign alternative to Starlink",
    beliefs: ["exceptional-founders"],
    thesis: "",
    founderInsight: "",
    accent: "blue",
    website: "https://www.exosat.com/",
    image: "/companies/exosat.jpg",
  },
  {
    id: "83-sciences",
    name: "83 Sciences",
    industry: "AI",
    year: "2026",
    stage: "Angel",
    description: "AI-native materials discovery powered by unpublished experimental data",
    beliefs: ["exceptional-founders"],
    thesis: "Labs are full of unpublished and untapped experimental data that is not worth a researcher’s time. But AI is perfect for recognizing patterns in vast arrays of imperfect data. Foundational labs are training on every published research paper, but they are missing the discoveries hidden in scientific “failures.”",
    founderInsight: "",
    accent: "green",
    website: "https://83sciences.ai/",
    image: "/companies/83-sciences.jpg",
  },
  {
    id: "synapse-semiconductor",
    name: "Synapse Semiconductor",
    industry: "Hardware",
    year: "2026",
    stage: "Angel",
    description: "New semiconductors that merge compute and vision",
    beliefs: ["beyond-gpus", "exceptional-founders"],
    thesis: "",
    founderInsight: "",
    accent: "amber",
    website: "https://www.synapsesemi.org/",
    image: "/companies/synapse-semiconductor.jpg",
  },
  {
    id: "lamb-labs",
    name: "Lamb Labs",
    industry: "Hardware",
    year: "2026",
    stage: "Angel",
    description: "Lightning fast chips with hardcoded AI models",
    beliefs: ["beyond-gpus", "exceptional-founders"],
    thesis: "Just as bitcoin mining shifted from GPUs to ASICs, LLMs are going to shift to dedicated hardware that is faster and more energy efficient. Etched and Taalas have already proven that the demand for specialized chips is here and growing rapidly.",
    founderInsight: "Only in 2026 did we get models that were “good enough” to hard code. By quantizing them down, you can design a custom chip hard coded to the model that doesn’t require HBM and eliminates a huge amount of energy usage. There is a section of the market of data center companies that don’t have the dedicated energy contracts to run Nvidia clusters, but are desperate to run less energy hungry chips.",
    accent: "violet",
    website: "https://lamb-labs.com/",
    image: "/companies/lamb-labs.webp",
    imagePosition: "center 44%",
  },
];
