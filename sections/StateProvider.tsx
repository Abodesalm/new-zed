"use client";

import { Provider } from "react-redux";
import SearchEngine from "./SearchEngine";
import { store } from "@/redux/games-search/store";

function StateProvider({ role }) {
  return (
    <Provider store={store}>
      <SearchEngine role={role} />
    </Provider>
  );
}

export default StateProvider;
