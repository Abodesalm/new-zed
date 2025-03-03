"use client";

import { store } from "@/redux/game-add/store";
import EditForm from "@/sections/game/EditForm";
import { Provider } from "react-redux";

export default function EditGame() {
  return (
    <Provider store={store}>
      <div className="pad w-full">
        <EditForm />
      </div>
    </Provider>
  );
}
