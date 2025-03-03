import Genre from "@/components/Genre";
import Icon from "@/components/layout/Icon";
import { coloring, covers_api } from "@/public/data";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import { BiCalendar, BiMoney } from "react-icons/bi";

const pricing = (p) => {
  if (p === 0) return <p>free</p>;
  else if (!p) return <p>unknown !</p>;
  else return <p>{p}$</p>;
};

export default async function Info({ info }) {
  const locale = await getLocale();
  return (
    <section className="h-fit flex flex-row items-center md:items-start md:mt-4 gap-6">
      <div>
        <Image
          src={`${covers_api}/${info.cover}`}
          alt="game poster image"
          width={200}
          height={300}
          loading="eager"
          className="h-[300px] w-[200px] md:h-[225px] md:w-[150px] rounded-[10px] bg-gray-500"
        ></Image>
      </div>
      <div className=" space-y-2 flex flex-col justify-between">
        <h1 className="text-size-4 capitalize">{info.name}</h1>
        <div className="max-h-[100px] w-[380px] md:w-[200px] p-1 bg-bglight dark:bg-darker rounded-[5px]">
          <p className="text-size-6">{info.descriptions[locale]}</p>
        </div>
        <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
          {" "}
          <Icon
            i={"developer"}
            className="text-accentt dark:text-accent text-[18px]"
          />{" "}
          {info.developer}
          {!info.developer && <p>unknown !</p>}
        </div>
        <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
          {" "}
          <Icon
            i={"publisher"}
            className="text-accentt dark:text-accent text-[18px]"
          />{" "}
          {info.publisher}
          {!info.publisher && <p>unknown !</p>}
        </div>
        <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
          <BiCalendar className="text-accentt dark:text-accent text-[18px]" />{" "}
          {info.release}
          {!info.release && <p>unknown !</p>}
        </div>
        <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
          {" "}
          <BiMoney className="text-accentt dark:text-accent text-[18px]" />{" "}
          {pricing(info.price)}
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {info.tags.map((el) => {
            return <Genre key={el} title={el} clas={`flex-center`} />;
          })}
        </div>

        <div className="flex flex-row flex-wrap gap-3">
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

        <div className="text-size-6 flex flex-row items-center gap-2 capitalize">
          <p>metacritic :</p>
          <p className={`rate-${coloring(info.metacritic)} font-medium`}>
            {info.metacritic}
          </p>
          {!info.metacritic && <p>unknown !</p>}
        </div>

        <div className="capitalize text-size-6">
          <p className="inline font-semibold">{info.series}</p>{" "}
          {info.series && <p className="inline lowercase">series.</p>}
        </div>
      </div>
    </section>
  );
}

// metacritic
