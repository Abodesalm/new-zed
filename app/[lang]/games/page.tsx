import Loader from "@/components/layout/Loader";
import StateProvider from "@/sections/StateProvider";
import { getAuth } from "@/services/auth";
import { Suspense } from "react";

export default async function Games() {
  const { role } = await getAuth();
  return (
    <div className="pad w-full">
      <Suspense fallback={<Loader />}>
        <StateProvider role={role} />
      </Suspense>
    </div>
  );
}
