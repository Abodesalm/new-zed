/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Card from "@/components/Card";
import Icon from "@/components/layout/Icon";
import {
  add_platform,
  add_tag,
  del_platform,
  del_tag,
  next_page,
  pre_page,
  reset,
  searching,
  set_metac,
  set_price,
  set_sort,
  set_year,
} from "@/redux/games-search/slice";
import { getGames } from "@/services/games";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { years, allGenres, platforms } from "@/public/data";
import Filters from "@/components/Filters";
import Link from "next/link";

function SearchEngine({ role }) {
  const [games, setGames] = useState<any>();
  const [filters, setFilters] = useState<boolean>(false);
  const dispatch = useDispatch();
  const queries = useSelector((state: any) => state.queries);
  const str_query = () => {
    let page = `page=${queries.page}`;
    let search = queries.search && `search=${queries.search}`;
    let year = queries.year && `release=${queries.year}`;
    let price = queries.price && `price=${queries.price}`;
    let metacritic = queries.metacritic && `metacritic=${queries.metacritic}`;
    let tags = queries.tags && `tags=${queries.tags}`;
    let platforms = queries.platforms && `platforms=${queries.platforms}`;
    let sort = queries.sort && `sort=${queries.sort}`;
    let fields = "fields=name,cover,tags,slug";

    let all = [
      page,
      search,
      year,
      price,
      metacritic,
      tags,
      platforms,
      sort,
      fields,
    ]
      .filter((el) => {
        return el !== undefined && el !== null && el !== "";
      })
      .join("&");

    return all;
  };

  useEffect(() => {
    async function getData() {
      let data = await getGames(str_query());
      setGames(data);
    }
    getData();
  }, [queries]);
  return (
    <>
      <section className="w-full py-2 h-fit flex flex-col">
        <div className="w-full flex-center">
          <input
            type="search"
            className="input w-1/3 md:w-2/3"
            placeholder="search..."
            onChange={(e) => dispatch(searching(e.target.value))}
          />
          <button
            className="flex flex-row items-center ms-8"
            onClick={() => setFilters(!filters)}
          >
            <Icon
              i={`downArrow`}
              className={`transition-transform  ${filters ? "" : "-rotate-90"}`}
            />
            Filters
          </button>
          {role === "admin" && (
            <Link className="btn-accent-outline ms-4" href={`/games/form`}>
              admin
            </Link>
          )}
        </div>

        <div
          className={` ${
            filters ? "h-[340px]" : "h-[0]"
          } overflow-hidden transition-all w-full flex flex-col gap-y-4 pt-2`}
        >
          {/* Genres */}
          <div className={`w-full h-fit`}>
            <h3 className="text-size-5 capitalize">tags</h3>
            <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-2">
              {allGenres.map((el) => {
                return (
                  <Filters
                    data={queries.tags}
                    name={el}
                    add={add_tag}
                    del={del_tag}
                    dispatch={dispatch}
                    key={el}
                  />
                );
              })}
            </div>
          </div>
          <div className={`w-full h-fit`}>
            <h3 className="text-size-5 capitalize">platforms</h3>
            <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-2">
              {platforms.map((el) => {
                return (
                  <Filters
                    data={queries.platforms}
                    name={el}
                    add={add_platform}
                    del={del_platform}
                    dispatch={dispatch}
                    key={el}
                  />
                );
              })}
            </div>
          </div>

          {/* Others */}
          <div className={`flex flex-row items-center h-fit justify-between`}>
            <div className="flex flex-col items-center">
              <p className="text-[18px] sm:text-[15px]">Year</p>
              <select
                onChange={(e) => dispatch(set_year(e.target.value))}
                className="cursor-pointer"
              >
                <option value={undefined}>all</option>
                {years.reverse().map((el) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-row items-center gap-4 md:gap-0 md:flex-col">
              <p>rate</p>
              <input
                type="number"
                className="w-[60px] input"
                min={0}
                onChange={(e) => dispatch(set_metac(e.target.value))}
                value={queries.metacritic}
              />
              <button
                className="btn-ui-radio"
                onClick={() => dispatch(set_metac(undefined))}
              >
                all
              </button>
            </div>
            <div className="flex flex-row items-center gap-4 md:gap-0 md:flex-col">
              <p>price</p>
              <input
                type="number"
                className="w-[60px] input"
                min={0}
                onChange={(e) => dispatch(set_price(e.target.value))}
                value={queries.price}
              />
              <button
                className="btn-ui-radio"
                onClick={() => dispatch(set_price(undefined))}
              >
                all
              </button>
            </div>
            {/* SORT */}
            <div className="flex flex-col items-center">
              <p className="text-[18px] sm:text-[15px] capitalize">Sort</p>
              <select
                onChange={(e) => dispatch(set_sort(e.target.value))}
                className="cursor-pointer"
              >
                <option value={"all"}>A - Z</option>
                <option value={"-release"}>old games</option>
                <option value={"release"}>new games</option>
                <option value={"price"}>low price</option>
                <option value={"-price"}>high price</option>
                <option value={"-metacritic"}>high rate</option>
                <option value={"metacritic"}>low rate</option>
              </select>
            </div>

            <button className="btn-accent" onClick={() => dispatch(reset())}>
              reset
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center md:justify-around flex-wrap gap-8 ">
        {games ? (
          games?.data?.data?.map((game) => {
            return (
              <Card
                name={game.name}
                slug={game.slug}
                tags={game.tags}
                cover={game.cover}
                key={game.slug}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center h-[70vh] w-full">
            <div className="loader text-accent"></div>
          </div>
        )}
      </section>

      <section>
        <div className="w-[240px] h-[100px] bg-light dark:bg-darker flex flex-row justify-evenly items-center rounded-[10px] mx-auto drop-shadow">
          <button
            className="w-[50px] h-[50px] flex-center rounded-full border border-accent transition-all"
            id="previous"
            onClick={() => {
              dispatch(pre_page());
            }}
          >
            <Icon i={`leftArrow`} />
          </button>
          <div className="w-[50px] h-[50px] flex-center">{queries.page}</div>
          <button
            className="w-[50px] h-[50px] flex-center rounded-full border border-accent transition-all"
            id="next"
            onClick={() => {
              dispatch(next_page(games?.results));
            }}
          >
            <Icon i={`rightArrow`} />
          </button>
        </div>
      </section>
    </>
  );
}

export default SearchEngine;
