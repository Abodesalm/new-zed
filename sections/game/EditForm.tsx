"use client";

import Loader from "@/components/layout/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameForm from "./GameForm";
import { games_api } from "@/public/data";
import { getAuth } from "@/services/auth";
import { useParams } from "next/navigation";
import { getGameByName } from "@/services/games";
import { set_all } from "@/redux/game-add/slice";
import { toast } from "react-toastify";

export default function EditForm() {
  const { game } = useParams();
  const dispatch = useDispatch();
  const gameState = useSelector((state: any) => state.gameState);
  const [error, setError] = useState<any>();
  const [data, setdata] = useState<any>();

  useEffect(() => {
    let get = async () => {
      const lastData = await getGameByName(game);
      setdata(lastData);
      dispatch(set_all(lastData));
    };
    get();
  }, []);

  const handle = async (e) => {
    e.preventDefault();
    setError(<Loader />);

    const { token } = await getAuth();

    const post = await fetch(`${games_api}/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(gameState),
    })
      .then((res) => res.json())
      .catch((err) =>
        setError(<p className="text-danger capitalize">{err?.message}</p>)
      );
    if (post.status === "success") {
      setError(<p className="text-accent capitalize">updated!</p>);
      toast("updated!", {
        type: "success",
      });
    } else {
      setError(<p className="text-danger capitalize">{post?.message}</p>);
      toast.error(post.message);
    }
  };

  return (
    <section className="w-full">
      <GameForm
        handleFunction={handle}
        err={error}
        theTags={data?.tags}
        thePlat={data?.platforms}
      />
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
