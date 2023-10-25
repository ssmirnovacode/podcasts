import { Component } from "solid-js";
import "./PodcastSummary.css";
import { PodcastData } from "../types";

type PodcastSummaryProps = {
  podcast: PodcastData;
};

const PodcastSummary: Component = (props) => {
  return (
    <section class="podcast-info__summary">
      <img src={props.podcast.image} alt={props.podcast.title} />

      <div>
        <h3>{props.podcast.title}</h3>
        <div>
          by <span>{props.podcast.author}</span>
        </div>
      </div>
      <div>
        <p>Description:</p>
        {/* <p>{description}</p> */}
      </div>
    </section>
  );
};

export default PodcastSummary;
