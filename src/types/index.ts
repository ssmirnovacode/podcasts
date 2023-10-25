export type Podcast = {
  id: string;
  title: string;
  image: string;
  author: string;
  description: string;
};

export type PodcastData = {
  title: string;
  author: string;
  image: string;
  country: string;
  id: string;
  genre: string;
  episodesCount: number;
  releaseDate: string;
};

export type Episode = {
  audio: string;
  description: string;
  id: number;
  title: string;
  duration: number;
  releaseDate: string;
};
