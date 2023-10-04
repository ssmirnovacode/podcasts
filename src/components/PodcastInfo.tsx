import { Component } from "solid-js";
import "./PodcastInfo.css";
import { useParams } from "@solidjs/router";

const PodcastInfo: Component = (props) => {
  const params = useParams();

  return <div class="wrapper">{params.id}</div>;
};

export default PodcastInfo;
