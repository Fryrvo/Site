export interface GalleryConfig {
  owner: string;       // org onwer Fryrvo-Stuff 
  repo: string;        //  repo  name
  imagePath: string;   // Path
  title: string;       // Page title
  description: string; // Meta desc
}

export const galleries: Record<string, Record<string, GalleryConfig>> = {

laylai: {
    "gymnastics-2026": {
      owner: "Fryrvo-Stuff",
      repo: "Rhythmic-Gymnastics-Thailand-Championships-2026",
      imagePath: "src/images",
      title: "Laylai's Gymnastics Gallery",
      description: "Rhythmic Gymnastics Thailand Championships 2026",
    },
    "place holder": {
      owner: "Fryrvo-Stuff",
      repo: "",
      imagePath: "",
      title: "",
      description: "",
    },
  },
  ilyanna: {
    "Korat2026": {
      owner: "Fryrvo-Stuff",
      repo: "Ilyanna-Korat-2026",
      imagePath: "Img",
      title: "Ilyanna-Korat-2026",
      description: "Rhythmic Gymnastics Thailand Championship Korat2026",
    },
  },
};