import "./PodcastEpisodes.css";
import { convertMsToTime } from "../utils/convertMilis";
import { Episode } from "../types";
import { For } from "solid-js";

type PodcastEpisodesProps = {
  episodes: Episode[];
};

const PodcastEpisodes = (props: PodcastEpisodesProps) => {
  return (
    <div class="podcast-details">
      <section class="podcast-count">
        <div>
          Episodes: <span>{props.episodes.length}</span>
        </div>
      </section>
      <section class="podcast-episodes">
        <For each={props.episodes}>
          {(episode: Episode) => (
            <div class="table-item">
              <div class="table-item__title">
                <a href={`episode/${episode.id}`}>{episode.title}</a>
              </div>
              <div class="table-item__date">{episode.releaseDate}</div>
              <div class="table-item__duration">{episode.duration}</div>
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default PodcastEpisodes;
