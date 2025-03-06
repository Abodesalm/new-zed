import Protect from "@/components/layout/Protect";
import EditForm from "@/sections/game/EditForm";
import ReduxProvider from "@/sections/game/ReduxProvider";

export default function EditGame() {
  return (
    <Protect permission={"admin"}>
      <ReduxProvider>
        <div className="pad w-full">
          <EditForm />
        </div>
      </ReduxProvider>
    </Protect>
  );
}
