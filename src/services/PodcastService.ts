import { Episode, Podcast, PodcastData } from "../types";
import {
  EPISODES_LIST_QUERY,
  PROXY_URL,
  URL_PODCAST_LOOKUP,
  URL_SEARCH,
  URL_TOP_100,
} from "../utils/constants";
import { convertMsToTime } from "../utils/convertMilis";

export class PodcastService {
  static async getPodcasts() {
    const response = await fetch(URL_TOP_100).catch((err) => console.log(err));
    const data = (await response?.json()) || {};
    const { feed: { entry = [] } = {} } = data;
    const podcasts: Podcast[] = entry.map((item) => ({
      // TODO look for types from API
      id: item?.id?.attributes?.["im:id"],
      title: item?.title?.label,
      image: item?.["im:image"]?.[0]?.label,
      author: item?.["im:artist"]?.label,
      description: item?.summary?.label,
    }));

    // TODO add type assertion and throw error or warning

    return podcasts;
  }

  static async getPodcastById(id: string) {
    const stringToEncode = `${URL_PODCAST_LOOKUP}?id=${id}&${EPISODES_LIST_QUERY}`;
    const fetchUrl = `${PROXY_URL}?${encodeURIComponent(stringToEncode)}`;
    const response = await fetch(fetchUrl).catch((err) => console.error(err));
    const { results = [] } = (await response?.json()) || {};

    const podcast: PodcastData = {
      title: results[0]?.collectionName,
      author: results[0]?.artistName,
      image: results[0]?.artworkUrl600,
      country: results[0]?.country,
      id,
      genre: results[0]?.primaryGenreName,
      episodesCount: results[0]?.trackCount,
      releaseDate: results[0]?.releaseDate
        ?.slice(0, 10)
        .split("-")
        .reverse()
        .join("/"),
    };
    const episodes: Episode[] =
      results
        ?.slice(1)
        ?.map(
          ({
            description,
            episodeUrl,
            releaseDate,
            trackId,
            trackName,
            trackTimeMillis,
          }: {
            description: string;
            episodeUrl: string;
            releaseDate: string;
            trackId: number;
            trackName: string;
            trackTimeMillis: number;
          }) => ({
            title: trackName,
            description,
            duration: trackTimeMillis ? convertMsToTime(trackTimeMillis) : "",
            id: trackId,
            releaseDate: releaseDate
              ?.slice(0, 10)
              .split("-")
              .reverse()
              .join("/"),
            audio: episodeUrl,
          })
        ) || [];

    return { podcast, episodes };
  }

  static async searchPodcasts(term: string) {
    const response = await fetch(`${URL_SEARCH}/term=${term}`).catch((err) =>
      console.log(err)
    );
    const data = (await response?.json()) || {};
    console.log(data);
  }
}
