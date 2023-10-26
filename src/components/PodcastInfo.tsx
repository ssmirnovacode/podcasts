import { Component, Show, createEffect, createResource } from "solid-js";
import "./PodcastInfo.css";
import { useParams } from "@solidjs/router";
import { PodcastService } from "../services/PodcastService";
import PodcastSummary from "./PodcastSummary";
import PodcastEpisodes from "./PodcastEpisodes";

const PodcastInfo: Component = (props) => {
  const params = useParams();

  const [data] = createResource(params.id, PodcastService.getPodcastById);

  return (
    <div class="wrapper">
      {data.error ? ( // TODO create error component
        <div>Server error!!!</div>
      ) : (
        <Show when={!data.loading} fallback={<>Loading the podcast info...</>}>
          <PodcastSummary podcast={data()?.podcast} />
          <PodcastEpisodes episodes={data()?.episodes || []} />
        </Show>
      )}
    </div>
  );
};

export default PodcastInfo;
