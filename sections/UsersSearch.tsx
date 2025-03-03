"use client";
import Avatar from "@/components/layout/Avatar";
import { getUsers } from "@/services/users";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function UsersSearch() {
  const path = usePathname();
  const [search, setSearch] = useState<string>();
  const [data, setData] = useState<any>();

  const str_query = () => {
    let searching = search && `search=${search}`;
    let all = [searching, "fields=username,avatar", "limit=10"]
      .filter((el) => {
        return el !== undefined && el !== null && el !== "";
      })
      .join("&");

    return all;
  };

  useEffect(() => {
    async function getData() {
      let users = await getUsers(str_query());
      setData(users?.data?.data);
    }
    getData();
  }, [search]);

  return (
    <>
      <section className="w-full flex-center">
        <input
          type="search"
          className="input w-1/3 md:w-2/3"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <section className="min-h-[60vh] flex flex-col w-full gap-2 items-center">
        {data?.map((el) => {
          return (
            <Link
              className={`w-[80%] md:w-full h-[80px] btn-ui-silver drop-shadow-sm rounded-lg flex flex-row items-center gap-4 md:gap-2`}
              href={`${path}/${el.username}`}
              key={el.username}
            >
              <div className="w-[60px] h-[60px] bg-dark rounded-full">
                <Avatar avatar={el.avatar} className="w-[60px]" />
              </div>
              <p className="text-size-3 md:text-size-4">{el.username}</p>
            </Link>
          );
        })}
      </section>
    </>
  );
}
