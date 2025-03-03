import Info from "@/sections/game/Info";
import Req from "@/sections/game/Req";
import Reviews from "@/sections/game/Reviews";
import { getGameByName, getGameReviews } from "@/services/games";

export default async function Game({ params }) {
  const { game } = await params;
  const data = await getGameByName(game);
  const {
    name,
    developer,
    publisher,
    release,
    tags,
    platforms,
    series,
    price,
    metacritic,
    descriptions,
    cover,
  } = data;
  const reviews = await getGameReviews(data.id, "limit=10").then(
    (reviews) => reviews.data.data
  );
  const information = {
    name,
    developer,
    publisher,
    release,
    tags,
    platforms,
    series,
    price,
    metacritic,
    descriptions,
    cover,
  };

  return (
    <div className="pad w-full">
      <Info info={information} />
      <Req min={data.req.min} rec={data.req.rec} />
      {data.trailer && <Trailer data={data.trailer} />}
      {data.DLCs[0] && <DLCs data={data.DLCs} />}
      <Reviews id={data.id} initialReviews={reviews} />
    </div>
  );
}

const DLCs = ({ data }) => {
  return (
    <section className="py-4 flex flex-col gap-4 md:gap-2 border-t border-lightdark">
      {data.map((el) => {
        return (
          <div
            key={el.name}
            className=" w-2/3 md:w-full flex flex-row items-center justify-between"
          >
            <div className="flex flex-row items-center gap-4 md:gap-2">
              <h4 className="text-accent text-size-3 font-bold">DLC</h4>
              <h5 className="text-size-4">{el.name}</h5>
            </div>
            {el.price && (
              <p className="text-size-4 font-medium">
                {el.price} <span className="text-accent">$</span>
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};

const Trailer = ({ data }) => {
  return (
    <section>
      <p>trailer</p>
    </section>
  );
};
