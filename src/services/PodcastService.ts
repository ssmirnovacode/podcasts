import { URL_TOP_100 } from "../utils/constants";

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
    console.log(podcasts);
    return podcasts;
  }
}
