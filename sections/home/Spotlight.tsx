import { covers_api } from "@/public/data";
import { getGameOfTheDay } from "@/services/games";
import Image from "next/image";
import Link from "next/link";

async function Spotlight() {
  const game = await getGameOfTheDay();
  return (
    <div>
      <section className="h-[400px] flex flex-row">
        <div className="w-[260px] h-[380px] -rotate-3 rtl:rotate-3 mt-2 rounded-xl flex items-center justify-center">
          <Image
            src={`${covers_api}/${game.cover}`}
            alt={`${game.name} cover image`}
            width={260}
            height={380}
            className="rounded-xl md:w-[200px] md:h-auto"
          />
        </div>
        <div className="flex flex-col justify-between w-[calc(100%-260px)] md:w-[calc(100%-200px)]">
          <div>
            <h1 className="capitalize text-size-1 ms-4 sm:hidden">
              {game.name}
            </h1>
            <h2 className="capitalize text-size-2 font-bold ms-[20rem] md:ms-0 md:mt-12 text-accent">
              game of the day
            </h2>
          </div>
          <Link
            href={`/games/${game.slug}`}
            className="btn-accent w-fit self-end mb-8 me-8 capitalize"
          >
            know more
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Spotlight;
