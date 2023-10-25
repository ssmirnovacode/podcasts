import { Component, Show, createEffect, createSignal } from "solid-js";
import "./PodcastInfo.css";
import { useParams } from "@solidjs/router";
import { PodcastService } from "../services/PodcastService";
import PodcastSummary from "./PodcastSummary";
import { PodcastDetails } from "../types";

const PodcastInfo: Component = (props) => {
  const params = useParams();
  const [podcast, setPodcast] = createSignal<PodcastDetails | undefined>();

  // TODO change to createResource()
  createEffect(() => {
    (async () => {
      const podcast = await PodcastService.getPodcastById(params.id);
      console.log(podcast);
      setPodcast(podcast);
    })();
  });

  return (
    <div class="wrapper">
      <Show when={podcast()} fallback={<p>{params.id} loading</p>}>
        <PodcastSummary podcast={podcast()} />
      </Show>
    </div>
  );
};

export default PodcastInfo;
