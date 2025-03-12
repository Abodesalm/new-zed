import RatesSquare from "@/components/RatesSquare";
import UserLink from "@/components/UserLink";
import { covers_api } from "@/public/data";
import { getAuth } from "@/services/auth";
import { getUserReviews, getUserByName } from "@/services/users";
import Image from "next/image";

export default async function ReviewPage({ params }) {
  const { user, review } = await params;
  const session = await getAuth();

  const userData = await getUserByName(user);
  const reviewData = await getUserReviews(
    userData?.data?.id,
    `_id=${review}`
  ).then((res) => res?.data?.data[0]);

  return (
    <div className="pad min-h-[70vh]">
      <section className="flex flex-row justify-between items-start">
        <div className="w-[80%] flex flex-col gap-2 items-start">
          <div className="w-full flex flex-row justify-between items-start">
            <UserLink
              username={reviewData?.userId?.username}
              avatar={reviewData?.userId?.avatar}
            />
            <RatesSquare rates={reviewData?.rates} />
          </div>
          <h3 className="text-size-5">short discribe</h3>
          <div className="w-full bg-light dark:bg-middark rounded-sm p-2 text-size-6">
            {reviewData?.texts.short}
          </div>
        </div>
        <Image
          src={`${covers_api}/${reviewData?.gameId?.cover}`}
          alt={`${reviewData?.gameId?.name} cover image`}
          width={300}
          height={900}
          className="h-auto w-[140px] md:w-[100px] rounded-md border-4 border-boldblue"
        />
      </section>
    </div>
  );
}
