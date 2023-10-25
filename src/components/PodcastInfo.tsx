import { Component, Show, createResource } from "solid-js";
import "./PodcastInfo.css";
import { useParams } from "@solidjs/router";
import { PodcastService } from "../services/PodcastService";
import PodcastSummary from "./PodcastSummary";

const PodcastInfo: Component = (props) => {
  const params = useParams();

  const [podcast] = createResource(params.id, PodcastService.getPodcastById);

  return (
    <Show when={!podcast.loading} fallback={<>Loading the podcast info...</>}>
      <div class="wrapper">
        <Show when={podcast()} fallback={<p>{params.id} loading</p>}>
          <PodcastSummary podcast={podcast()} />
        </Show>
      </div>
    </Show>
  );
};

export default PodcastInfo;
