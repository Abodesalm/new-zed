import Loader from "@/components/layout/Loader";
import UsersSearch from "@/sections/UsersSearch";
import { Suspense } from "react";

export default function Users() {
  return (
    <div className="pad w-full">
      <Suspense fallback={<Loader />}>
        <UsersSearch />
      </Suspense>
    </div>
  );
}
