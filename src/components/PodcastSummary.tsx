import { Show } from "solid-js";
import "./PodcastSummary.css";
import { PodcastData } from "../types";
import { state } from "../store";

type PodcastSummaryProps = {
  podcast: PodcastData | undefined;
};

const PodcastSummary = (props: PodcastSummaryProps) => {
  return (
    <Show when={props.podcast} fallback={<>Podcast not found...</>}>
      <section class="podcast-info__summary">
        <img src={props.podcast?.image} alt={props.podcast?.title} />

        <div>
          <h3>{props.podcast?.title}</h3>
          <div>
            by <span>{props.podcast?.author}</span>
          </div>
        </div>
        <div>
          <p>Description:</p>
          <p>{state.selectedItem?.description || ""}</p>
        </div>
      </section>
    </Show>
  );
};

export default PodcastSummary;
