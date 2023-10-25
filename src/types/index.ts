export type Podcast = {
  id: string;
  title: string;
  image: string;
  author: string;
  description: string;
};

export type PodcastDetails = {
  title: string;
  author: string;
  image: string;
  country: string;
  id: string;
  genre: string;
  episodesCount: number;
  releaseDate: string;
};
