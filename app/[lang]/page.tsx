import Loader from "@/components/layout/Loader";
import GamesCount from "@/sections/home/GamesCount";
import Golden from "@/sections/home/Golden";
import NewsHome from "@/sections/home/NewsHome";
import Spotlight from "@/sections/home/Spotlight";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="pad pt-[0_!important] w-full">
      <Suspense fallback={<Loader />}>
        <Spotlight />
        <Golden />
        <GamesCount />
        <NewsHome />
      </Suspense>
    </div>
  );
}
