import { Component, For, Show, createResource } from "solid-js";
import "./List.css";
import { Podcast } from "../types";
import { PodcastService } from "../services/PodcastService";
import PodcastCard from "./PodcastCard";

const List: Component = (props) => {
  const [podcasts] = createResource(PodcastService.getPodcasts);

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
      <Show
        when={!podcasts.loading}
        fallback={<>Loading the podcasts list...</>}
      >
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
      </Show>
    </div>
  );
};

export default List;
