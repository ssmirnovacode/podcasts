import {
  Component,
  For,
  Show,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import "./List.css";
import { Podcast } from "../types";
import { PodcastService } from "../services/PodcastService";
import PodcastCard from "./PodcastCard";

const filterPodcasts = (items: Podcast[] | undefined, term: string) => {
  if (!items?.length) return [];
  return items.filter(
    ({ author, title }: { author: string; title: string }) => {
      return (
        author.toLowerCase().includes(term.toLowerCase()) ||
        title.toLowerCase().includes(term.toLowerCase())
      );
    }
  );
};

const List: Component = (props) => {
  // add API call with search endpoint and term param
  const [term, setTerm] = createSignal("");
  const [debouncedTerm, setDebouncedTerm] = createSignal("");
  const [podcasts] = createResource(PodcastService.getPodcasts);
  const [filteredItems, setFilteredItems] = createSignal<Podcast[]>([]);

  createEffect(() => {
    const searchTerm = term();
    const timerId = setTimeout(() => setDebouncedTerm(searchTerm), 500);
    return () => clearTimeout(timerId);
  });

  createEffect(() => {
    const items = podcasts();
    const searchTerm = debouncedTerm();
    const filtered = filterPodcasts(items, searchTerm);
    setFilteredItems(filtered);
    console.log(JSON.stringify(items[1]));
  });

  return (
    <div>
      <div class="search-wrapper">
        <label for="search">Search</label>
        <input
          id="search"
          type="text"
          value={term()}
          onInput={(e) => setTerm(e.target.value)}
        />
      </div>
      {podcasts.error ? (
        <div>Server error!</div>
      ) : (
        <Show
          when={!podcasts.loading}
          fallback={<>Loading the podcasts list...</>}
        >
          <section class="podcast-list">
            <Show
              when={filteredItems()?.length || !debouncedTerm()}
              fallback={<p>No podcast found matching your search criteria</p>}
            >
              <For each={debouncedTerm() ? filteredItems() : podcasts()}>
                {(podcast: Podcast) => <PodcastCard podcast={podcast} />}
              </For>
            </Show>
          </section>
        </Show>
      )}
    </div>
  );
};

export default List;
