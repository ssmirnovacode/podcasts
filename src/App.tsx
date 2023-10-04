import type { Component } from "solid-js";
import List from "./components/List";
import { Router, Route, Routes } from "@solidjs/router";
import PodcastInfo from "./components/PodcastInfo";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={List} />
        <Route path="/podcast/:id" component={PodcastInfo} />
      </Routes>
    </Router>
  );
};

export default App;
