import Slider from "@/components/layout/Slider";
import { getGoldenGames } from "@/services/games";

async function Golden() {
  const games = await getGoldenGames().then((data) => data?.data?.data);

  return (
    <section className="h-[300px]">
      <Slider data={games} />
    </section>
  );
}

export default Golden;
