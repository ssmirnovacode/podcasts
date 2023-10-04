import { Component, For, Show, createEffect, createSignal } from "solid-js";
import "./List.css";
import { Podcast } from "../types";
import { PodcastService } from "../services/PodcastService";
import PodcastCard from "./PodcastCard";

const List: Component = (props) => {
  const [podcasts, setPodcasts] = createSignal<Podcast[]>([]);

  createEffect(() => {
    (async () => {
      const items = await PodcastService.getPodcasts();
      setPodcasts(items);
      console.log("createEffect ran");
    })();
  });

  return (
    <div>
      <div class="search-wrapper">
        <label for="search">Search</label>
        <input
          id="search"
          type="text"
          //   value={term}
          //   onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      <section class="podcast-list">
        <Show
          when={podcasts().length}
          fallback={<p>No podcast found matching your search criteria</p>}
        >
          <For each={podcasts()}>
            {(podcast: Podcast) => <PodcastCard podcast={podcast} />}
          </For>
        </Show>
      </section>
    </div>
  );
};

export default List;
