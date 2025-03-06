import { getAuth } from "@/services/auth";

import { getUserReviews, getUserByName } from "@/services/users";

export default async function ReviewPage({ params }) {
  const { user, review } = await params;
  const userData = await getUserByName(user);
  const session = await getAuth();
  const reviewData = await getUserReviews(
    userData?.data?.id,
    `_id=${review}`
  ).then((res) => res?.data?.data[0]);

  return <div>ReviewPage</div>;
}
