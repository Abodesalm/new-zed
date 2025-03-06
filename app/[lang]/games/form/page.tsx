import Protect from "@/components/layout/Protect";
import ReduxProvider from "@/sections/game/ReduxProvider";
import AddForm from "@/sections/game/AddForm";

export default function GameForm() {
  return (
    <Protect permission={"admin"}>
      <ReduxProvider>
        <div className="pad w-full">
          <AddForm />
        </div>
      </ReduxProvider>
    </Protect>
  );
}
