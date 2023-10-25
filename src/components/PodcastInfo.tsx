import { Component, Show, createResource } from "solid-js";
import "./PodcastInfo.css";
import { useParams } from "@solidjs/router";
import { PodcastService } from "../services/PodcastService";
import PodcastSummary from "./PodcastSummary";
import PodcastEpisodes from "./PodcastEpisodes";

const PodcastInfo: Component = (props) => {
  const params = useParams();

  const [data] = createResource(params.id, PodcastService.getPodcastById);

  return (
    <Show when={!data.loading} fallback={<>Loading the podcast info...</>}>
      <div class="wrapper">
        <Show when={data()?.podcast} fallback={<p>{params.id} loading</p>}>
          <PodcastSummary podcast={data()?.podcast} />
          <PodcastEpisodes episodes={data()?.episodes || []} />
        </Show>
      </div>
    </Show>
  );
};

export default PodcastInfo;
