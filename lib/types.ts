export type Work = {
  slug: string;
  name: string;
  description: string;
  date: string;
  stack: string[];
  images: {
    name: string;
    url: string;
  }[];
};
