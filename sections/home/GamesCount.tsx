import { assets_api } from "@/public/data";
import { getGamesCount } from "@/services/games";
import Image from "next/image";

export default async function GamesCount() {
  const count = await getGamesCount();
  return (
    <section className="h-fit flex flex-row justify-between">
      <div className="flex flex-col ">
        <h2 className="text-size-2 mt-12">
          more than <span className="font-medium text-accent">{count}</span>{" "}
          games!
        </h2>
      </div>
      <div className="w-1/2 md:w-2/3 flex flex-col items-end">
        <Image
          src={`${assets_api}/cj.png`}
          alt="cj"
          width={1920}
          height={3413}
          className="h-auto w-1/2 md:w-full rtl:-scale-x-100"
        />
      </div>
    </section>
  );
}
