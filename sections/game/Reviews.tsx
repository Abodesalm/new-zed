/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import coloring from "@/utils/coloring";
import AddReview from "./AddReview";
import Avatar from "@/components/layout/Avatar";
import { useEffect, useState } from "react";
import { getGameReviews } from "@/services/games";
import Loader from "@/components/layout/Loader";
import UserLink from "@/components/UserLink";
import RatesSquare from "@/components/RatesSquare";

export default function Reviews({ id, initialReviews }) {
  const [data, setData] = useState(initialReviews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    let nextPage = page + 1;
    let newReviews = await getGameReviews(id, `page=${nextPage}&limit=10`);

    if (newReviews.length > 0) {
      setData((prev) => [...prev, ...newReviews]);
      setPage(nextPage);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, loading, hasMore]);

  return (
    <section className="w-full border-t border-lightdark">
      <h2 className="text-size-4 capitalize">reviews</h2>
      <AddReview id={id} />
      <div className="flex flex-col w-full mt-4 gap-2">
        {data?.map((el) => {
          return <Review data={el} key={el.id} />;
        })}
        {loading && <Loader />}
      </div>
    </section>
  );
}

const Review = ({ data }) => {
  return (
    <article className="w-full h-fit p-2 rounded-lg bg-light dark:bg-middark drop-shadow-md">
      <div className="flex flex-row justify-between">
        <UserLink
          username={data?.userId?.username}
          avatar={data?.userId?.avatar}
        />
        <RatesSquare rates={data?.rates} />
      </div>
      <pre>
        <p className="text-size-6 mt-2">{data?.texts?.short}</p>
      </pre>
    </article>
  );
};
