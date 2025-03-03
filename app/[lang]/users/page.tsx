import Loader from "@/components/layout/Loader";
import Header from "@/sections/Header";
import UsersSearch from "@/sections/UsersSearch";
import { Suspense } from "react";

export default function Users() {
  return (
    <div className="pad pt-[0_!important] w-full">
      <Header />
      <Suspense fallback={<Loader />}>
        <UsersSearch />
      </Suspense>
    </div>
  );
}
