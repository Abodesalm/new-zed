import NavSign from "@/components/layout/NavSign";
import Langlist from "@/components/layout/Langlist";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { getAuth } from "@/services/auth";
import { getLocale } from "next-intl/server";

export default async function Navbar() {
  const session = await getAuth();
  const locale = await getLocale();
  return (
    <nav className="navbar py-[1rem_!important]">
      <div className="text-size-4 font-medium">
        <Image
          src={logo}
          alt="zed games logo"
          width={50}
          height={50}
          className="fill-accent"
        />
      </div>
      <div className="flex gap-10 sm:gap-6 items-center">
        {/* <Langlist /> */}
        <ThemeSwitch />
        <NavSign
          username={session.username}
          isLoged={session.isLoged}
          avatar={session.avatar}
        />
      </div>
    </nav>
  );
}
