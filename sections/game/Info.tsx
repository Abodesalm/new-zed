import Genre from "@/components/Genre";
import Wishlist from "@/components/Wishlist";
import Icon from "@/components/layout/Icon";
import coloring from "@/utils/coloring";
import { covers_api } from "@/public/data";
import { getAuth } from "@/services/auth";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiMoney } from "react-icons/bi";

const pricing = (p) => {
  if (p === 0) return <p>free</p>;
  else if (!p) return <p>unknown !</p>;
  else return <p>{p}$</p>;
};

const unknowning = (el) => {
  if (el) {
    return <p>{el}</p>;
  } else {
    return <p>unknown!</p>;
  }
};

export default async function Info({ info }) {
  const locale = await getLocale();
  const { role, isLoged, wishlist } = await getAuth();

  return (
    <section className="h-fit flex flex-col items-start gap-4">
      <div className="flex flex-row items-center md:items-start gap-6">
        <div className="w-[200px] md:w-[150px]">
          <Image
            src={`${covers_api}/${info.cover}`}
            alt="game poster image"
            width={200}
            height={300}
            className="h-auto w-[200px] md:w-[150px] rounded-[10px] bg-gray-500"
          ></Image>
        </div>
        <div className="w-[calc(100%-200px)] md:w-[calc(100%-150px)] flex flex-col gap-y-2">
          <h1 className="text-size-4 capitalize">{info.name}</h1>

          <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
            <Icon
              i={"developer"}
              className="text-accentt dark:text-accent text-[18px]"
            />
            {unknowning(info.developer)}
          </div>

          <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
            <Icon
              i={"publisher"}
              className="text-accentt dark:text-accent text-[18px]"
            />
            {unknowning(info.publisher)}
          </div>

          <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
            <BiCalendar className="text-accentt dark:text-accent text-[18px]" />
            {unknowning(info.release)}
          </div>

          <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
            <BiMoney className="text-accentt dark:text-accent text-[18px]" />
            {pricing(info.price)}
          </div>

          <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
            <p>metacritic :</p>
            <p className={`rate-${coloring(info.metacritic)} font-medium`}>
              {info.metacritic}
            </p>
            {!info.metacritic && <p>unknown !</p>}
          </div>

          <div className="capitalize text-size-6">
            <p className="inline font-semibold">{info.series}</p>
            {info.series && <p className="inline lowercase"> series.</p>}
          </div>

          <div className="flex flex-row flex-wrap gap-3 md:hidden">
            {info.tags.map((el) => {
              return <Genre key={el} title={el} clas={`flex-center`} />;
            })}
          </div>

          <div className="flex flex-row flex-wrap gap-3 md:hidden">
            {info.platforms.map((el) => {
              return (
                <Genre
                  key={el}
                  title={el}
                  clas={`bg-boldblue/80 text-light flex-center`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[90%] p-1 bg-bglight dark:bg-darker rounded-md drop-shadow-sm">
        <p className="text-size-6">{info.descriptions[locale]}</p>
      </div>
      <div className="hidden md:flex flex-row flex-wrap gap-3">
        {info.tags.map((el) => {
          return <Genre key={el} title={el} clas={`flex-center`} />;
        })}
      </div>

      <div className="hidden md:flex flex-row flex-wrap gap-3">
        {info.platforms.map((el) => {
          return (
            <Genre
              key={el}
              title={el}
              clas={`bg-boldblue/80 text-light flex-center`}
            />
          );
        })}
      </div>
      {role === "admin" && (
        <Link
          href={`/games/${info.slug}/edit`}
          className="btn-accent-outline capitalize absolute top-[120px] start-[20px]"
        >
          <p className="md:hidden">edit</p>
          <Icon className="hidden md:flex" i={`edit`} />
        </Link>
      )}
      {isLoged && (
        <Wishlist
          wishlist={wishlist}
          id={info.id}
          className="absolute text-size-6 top-[150px] end-[160px] md:top-[350px] md:end-[15px]"
        />
      )}
    </section>
  );
}
