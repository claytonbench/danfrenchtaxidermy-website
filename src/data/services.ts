import optionsData from "./options.json";

export type Species = "antelope" | "elk" | "deer" | "bear";

export type ServiceOption = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

export const speciesOrder: Species[] = ["antelope", "elk", "deer", "bear"];

export const speciesMeta: Record<
  Species,
  {
    label: string;
    hero: string;
    tagline: string;
    intro: string;
    options: ServiceOption[];
  }
> = {
  antelope: {
    label: "Antelope",
    hero: "/images/slider3/antelope-backpack-taxidermy.jpeg",
    tagline: "Pronghorn mounts built to show every ounce of character.",
    intro:
      "Every antelope mount is finished in a customized way, so you can personalize your trophy with shoulder, pedestal, wall pedestal, European, horn, and tanning options. Add walnut or oak plaques and complimentary landscape features to turn your mount into a true piece of wildlife art.",
    options: (optionsData as any).antelope,
  },
  elk: {
    label: "Elk",
    hero: "/images/slider3/elk-taxidermy-bull-cow.jpeg",
    tagline: "Bugling bulls, hard-turned shoulder mounts, and full pedestals.",
    intro:
      "From a straight shoulder mount for a wide-racked bull to a 90-degree bugling pose or a floor pedestal with a custom base and landscape, we build elk mounts around the way you want to tell the story of your hunt.",
    options: (optionsData as any).elk,
  },
  deer: {
    label: "Deer",
    hero: "/images/slider3/european-deer-antler-taxidermy.jpeg",
    tagline: "Mule deer and whitetail — classic poses, modern craftsmanship.",
    intro:
      "Choose from upright alert, sneak, or semi-sneak poses with your animal looking left, right, or straight. Add walnut or oak plaques, wall pedestals, floor pedestals, antler mounts, European mounts, and landscape features to make your mount a lifelong centerpiece.",
    options: (optionsData as any).deer,
  },
  bear: {
    label: "Bear",
    hero: "/images/slider3/full-size-black-bear-taxidermy.jpeg",
    tagline: "Rugs, half-size, full-size, and European mounts.",
    intro:
      "Open mouth or closed, head mount, half-body, or full life-size — bear mounts are chosen for the room they will live in. We also offer bear-skin rugs, European mounts with barnwood, and bear head mounts on full body tans.",
    options: (optionsData as any).bear,
  },
};
