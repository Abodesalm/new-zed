"use client";

import Loader from "@/components/layout/Loader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameForm from "./GameForm";
import { games_api } from "@/public/data";
import { getAuth } from "@/services/auth";
import { toast } from "react-toastify";

export default function AddForm() {
  const dispatch = useDispatch();
  const game = useSelector((state: any) => state.gameState);
  const [error, setError] = useState<any>();

  const handle = async (e) => {
    e.preventDefault();
    const { token } = await getAuth();

    setError(<Loader />);

    const post = await fetch(`${games_api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .catch((err) =>
        setError(<p className="text-danger capitalize">{err?.message}</p>)
      );
    if (post.status === "success") {
      setError(<p className="text-accent capitalize">created!</p>);
      toast.success("created !");
    } else {
      setError(<p className="text-danger capitalize">{post?.message}</p>);
      toast.error(post.message);
    }
  };

  return (
    <section className="w-full">
      <GameForm handleFunction={handle} err={error} />
    </section>
  );
}

/*

  name
  developer
  publisher
  series
  rank
  trailer
  keywords

  release
  price
  metacritic

  descriptions  (en, ar, de, fr, es)

  tags
  platforms
  dlcs

  min (CPU, GPU, RAM, VRAM, storage)
  rec (CPU, GPU, RAM, VRAM, storage)

*/
