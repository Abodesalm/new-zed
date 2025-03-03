import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { searchs, sections } from "@/public/data";
import { getTranslations } from "next-intl/server";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="pad w-full h-fit bg-light dark:bg-darker flex flex-row flex-wrap justify-between">
      <div className="w-1/4 flex flex-col items-center gap-4 md:order-1 md:w-full">
        <Image src={logo} alt="zed games logo" width={100} height={100} />
        <p className="text-size-6 capitalize">zed games copywrite {year}</p>
      </div>

      <LinksGroup theArray={searchs} title={`search`} />
      <LinksGroup theArray={sections} title={`other`} />

      <div className="w-1/4"></div>
    </footer>
  );
}

const LinksGroup = async ({ title, theArray }) => {
  const t_links = await getTranslations("links");
  return (
    <div className="w-1/6 flex flex-col">
      <h4 className="text-size-5 border-b w-fit -mt-2">{t_links(title)}</h4>
      <div className="flex flex-col mt-1">
        {theArray.map((el) => {
          return (
            <Link
              className="text-size-6 hover:text-accent"
              key={el.url}
              href={el.url}
            >
              {t_links(el.title)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
