import { Component, ComponentProps } from "solid-js";
import "./PodcastCard.css";
import { Podcast } from "../types";

type CardProps = {
  podcast: Podcast;
};

// TODO -find out why JSX
const PodcastCard: Component = (props: CardProps) => {
  return (
    <article class="podcast-list__item">
      <div class="podcast-list__item image">
        <img alt={props.podcast.title} src={props.podcast.image} />
      </div>
      <h2>{props.podcast.title?.toUpperCase()}</h2>
      <p>{props.podcast.author?.toUpperCase()}</p>
    </article>
  );
};

export default PodcastCard;
