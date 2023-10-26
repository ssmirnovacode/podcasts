import { Component, ComponentProps } from "solid-js";
import "./PodcastCard.css";
import { Podcast } from "../types";
import { A } from "@solidjs/router";
import { setState } from "../store";

type CardProps = {
  podcast: Podcast;
};

// TODO -find out why JSX
const PodcastCard = (props: CardProps) => {
  return (
    <article class="podcast-list__item">
      <div
        class="podcast-list__item image"
        onClick={() => setState({ selectedItem: props.podcast })}
      >
        <A href={`/podcast/${props.podcast.id}`}>
          <img alt={props.podcast.title} src={props.podcast.image} />
        </A>
      </div>
      <h2>{props.podcast.title?.toUpperCase()}</h2>
      <p>{props.podcast.author?.toUpperCase()}</p>
    </article>
  );
};

export default PodcastCard;
