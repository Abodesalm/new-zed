import Loader from "@/components/layout/Loader";
import Header from "@/sections/Header";
import StateProvider from "@/sections/StateProvider";
import { getAuth } from "@/services/auth";
import { Suspense } from "react";

export default async function Games() {
  const { role } = await getAuth();
  return (
    <div className="pad pt-[0_!important] w-full">
      <Header />
      <Suspense fallback={<Loader />}>
        <StateProvider role={role} />
      </Suspense>
    </div>
  );
}
