"use client";
import Icon from "@/components/layout/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const p = path.split("/").slice(2).join("");

  const links = [
    { url: `/news`, icon: "news" },
    { url: `/games`, icon: "search" },
    { url: `/`, icon: "home" },
    { url: `/users`, icon: "users" },
    { url: `/settings`, icon: "others" },
  ];
  return (
    <div className="w-full h-[40px] bg-light dark:bg-middark flex flex-row items-center justify-between">
      {links.map((l) => (
        <Link
          className={`w-1/5 h-full flex items-center justify-center [&>*]:hover:bg-aclight/40 [&>*]:hover:dark:bg-boldblue/30`}
          href={l.url}
          key={l.icon}
        >
          <div
            className={`py-[0.3rem] px-3 rounded-full transition-colors ${
              p === l.url.split("/").join("")
                ? "bg-aclight/40 dark:bg-boldblue/30"
                : ""
            }`}
          >
            <Icon
              i={p === l.url.split("/").join("") ? `${l.icon}-fill` : l.icon}
              className={`text-[24px] ${
                p === l.url.split("/").join("") ? "text-accent" : ""
              }`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Header;
