"use client";

import { store } from "@/redux/game-add/store";
import AddForm from "@/sections/game/AddForm";
import { Provider } from "react-redux";

export default function GameForm() {
  return (
    <Provider store={store}>
      <div className="pad w-full">
        <AddForm />
      </div>
    </Provider>
  );
}
