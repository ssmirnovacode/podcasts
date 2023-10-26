import "./PodcastEpisodes.css";
import { convertMsToTime } from "../utils/convertMilis";
import { Episode } from "../types";
import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";

type PodcastEpisodesProps = {
  episodes: Episode[];
};

const PodcastEpisodes = (props: PodcastEpisodesProps) => {
  // TODO consider incorporating episode descriptions on Episode page or as modal
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
            <>
              <div class="table-item">
                <div class="table-item__title">
                  {episode.title}
                  {/* <A href={`episode/${episode.id}`}>{episode.title}</A> */}
                </div>
                <div class="table-item__date">{episode.releaseDate}</div>
                <div class="table-item__duration">{episode.duration}</div>
              </div>
              <audio
                class="audio"
                controls
                src={episode.audio}
                // onLoadStart={() => console.log("onloadstart")}
                // oncanplay={() => console.log("ready")}
              />
            </>
          )}
        </For>
      </section>
    </div>
  );
};

export default PodcastEpisodes;
