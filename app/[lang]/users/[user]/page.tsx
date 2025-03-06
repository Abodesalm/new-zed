import Loader from "@/components/layout/Loader";
import UserInfo from "@/components/user/UserInfo";
import UserReviews from "@/components/user/UserReviews";
import { getAuth } from "@/services/auth";
import { getUserByName } from "@/services/users";
import { Suspense } from "react";

export default async function UserPage({ params }) {
  const { user } = await params;
  const userData = await getUserByName(user);
  const { username } = await getAuth();

  return (
    <div className="pad w-full">
      <Suspense fallback={<Loader />}>
        <UserInfo user={userData} check={user === username} />
        <UserReviews userId={userData?.data?.id} check={user === username} />
      </Suspense>
    </div>
  );
}
