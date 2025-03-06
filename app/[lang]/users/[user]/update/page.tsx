import Protect from "@/components/layout/Protect";
import EditingForm from "@/components/user/EditingForm";
import { getUserByName } from "@/services/users";
import { getLocale } from "next-intl/server";

export default async function EditingPage({ params }) {
  const { user } = await params;
  const data = await getUserByName(user);
  return (
    <Protect same={{ status: true, user }}>
      <div className="pad w-full">
        <h1 className="text-size-2 capitalize">edit information</h1>
        <EditingForm lastData={data?.data} />
      </div>
    </Protect>
  );
}
