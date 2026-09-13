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
      title: "Gymnastics 2026",
      description: "Rhythmic-Gymnastics-Thailand-Championships-2026",
    },
    "gymnastics-2024": {
      owner: "Fryrvo-Stuff",
      repo: "Rhythmic-Gymnastics-Thailand-Championships-2024",
      imagePath: "src/images",
      title: "Gymnastics 2024",
      description: "Rhythmic-Gymnastics-Thailand-Championships-2024",
    },
    "apac-cup-2023": {
      owner: "Fryrvo-Stuff",
      repo: "APAC-CUP-2023",
      imagePath: "src/images",
      title: "APAC Cup 2023",
      description: "APAC-CUP-2023",
    },
    "petrina-cup-2023": {
      owner: "Fryrvo-Stuff",
      repo: "Petrina-Cup2023",
      imagePath: "src/images",
      title: "Petrina Cup 2023",
      description: "Petrina-Cup2023",
    },
    "singapore-2022": {
      owner: "Fryrvo-Stuff",
      repo: "Singapore2022",
      imagePath: "src/images",
      title: "Singapore 2022",
      description: "Singapore2022",
    },
    "apex-hongkong-2023": {
      owner: "Fryrvo-Stuff",
      repo: "Apex-2023---HongKong",
      imagePath: "src/images",
      title: "Apex Hong Kong 2023",
      description: "Apex-2023---HongKong",
    },
    "atod-2023": {
      owner: "Fryrvo-Stuff",
      repo: "ATOD-2023",
      imagePath: "src/images",
      title: "ATOD 2023",
      description: "ATOD-2023",
    },
    "sukothai": {
      owner: "Fryrvo-Stuff",
      repo: "Sukothai",
      imagePath: "src/images",
      title: "Sukothai",
      description: "Sukothai",
    },
    "korat-2025": {
      owner: "Fryrvo-Stuff",
      repo: "Korat2025",
      imagePath: "src/images",
      title: "Korat 2025",
      description: "Korat2025",
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