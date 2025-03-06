import WishlistItem from "@/components/WishlistItem";
import Protect from "@/components/layout/Protect";
import { getUserByName } from "@/services/users";

export default async function UserWishlist({ params }) {
  const { user } = await params;
  const fetch = await getUserByName(user).then((res) => res?.data?.wishlist);
  return (
    <Protect same={{ status: true, user }}>
      <div className="w-full min-h-[70vh] pad">
        <h1 className="text-size-3 capitalize">your wishlist</h1>
        <section className="flex flex-col w-full gap-4">
          {fetch?.map((el) => {
            return (
              <WishlistItem
                key={el.id}
                name={el.name}
                cover={el.cover}
                slug={el.slug}
                id={el.id}
              />
            );
          })}
        </section>
      </div>
    </Protect>
  );
}
