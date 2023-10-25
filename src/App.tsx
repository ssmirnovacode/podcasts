import type { Component } from "solid-js";
import List from "./components/List";
import { Router, Route, Routes, A } from "@solidjs/router";
import PodcastInfo from "./components/PodcastInfo";
import "./App.css";

const App: Component = () => {
  return (
    <Router>
      <div class="app">
        <div class="header-wrapper">
          <h1 class="header">
            <A href="/">Solid podcasts</A>
          </h1>
        </div>
        <Routes>
          <Route path="/" component={List} />
          <Route path="/podcast/:id">
            <Route path="/" component={PodcastInfo} />
            {/* <Route path={"/episode/:episodeId"} element={<EpisodeInfo />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
