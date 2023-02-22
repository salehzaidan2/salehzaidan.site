export type Work = {
  slug: string;
  name: string;
  description: Record<string, string>;
  date: string;
  stack: string[];
  images: {
    name: string;
    url: string;
  }[];
};
