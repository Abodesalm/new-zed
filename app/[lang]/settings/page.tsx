import ProfileSection from "@/components/settings/ProfileSection";
import Header from "@/sections/Header";
import { Suspense } from "react";
import Asection from "@/components/settings/Asection";
import { searchs, sections } from "@/public/data";
import Loader from "@/components/layout/Loader";
import { getAuth, logout } from "@/services/auth";

export default async function Settings() {
  const searchs_array = await searchs;
  const sections_array = await sections;
  const session = await getAuth();
  return (
    <div className="pad pt-[0_!important] w-full">
      <Header />
      <Suspense fallback={<Loader />}>
        <ProfileSection />

        <Asection title={`search`} theArray={searchs_array} />
        <Asection title={`other`} theArray={sections_array} />
        {session.isLoged && (
          <form action={logout}>
            <button className="btn-danger mt-8">Log out</button>
          </form>
        )}
      </Suspense>
    </div>
  );
}
