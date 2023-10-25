import {
  PROXY_URL,
  URL_PODCAST_DETAILS,
  URL_TOP_100,
} from "../utils/constants";

export class PodcastService {
  static async getPodcasts() {
    const response = await fetch(URL_TOP_100).catch((err) => console.log(err));
    const data = (await response?.json()) || {};
    const { feed: { entry = [] } = {} } = data;
    const podcasts = entry.map((item) => ({
      // TODO look for types from API
      id: item.id.attributes["im:id"],
      title: item.title.label,
      image: item["im:image"][0].label,
      author: item["im:artist"].label,
      description: item.summary.label,
    }));
    return podcasts;
  }

  static async getPodcastById(id: string) {
    const stringToEncode = `${URL_PODCAST_DETAILS}?id=${id}`;
    const fetchUrl = `${PROXY_URL}?${encodeURIComponent(stringToEncode)}`;
    const response = await fetch(fetchUrl).catch((err) => console.log(err));
    const { results = [] } = (await response?.json()) || {};
    // TODO add typing
    const arr = results?.map((item) => ({
      title: item.collectionName,
      author: item.artistName,
      image: item.artworkUrl600,
      country: item.country,
      id,
      genre: item.primaryGenreName,
      episodesCount: item.trackCount,
      releaseDate: item.releaseDate,
    }));
    return arr[0];
  }
}
