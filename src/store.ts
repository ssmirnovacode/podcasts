import { createStore } from "solid-js/store";
import { Podcast } from "./types";

const initialState: { selectedItem: Podcast | undefined } = {
  selectedItem: undefined,
};
export const [state, setState] = createStore(initialState);
