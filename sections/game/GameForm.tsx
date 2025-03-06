"use client";
import Filters from "@/components/Filters";
import { allGenres, platforms } from "@/public/data";
import {
  add_tag,
  del_tag,
  add_platform,
  del_platform,
  desc_ar,
  desc_de,
  desc_en,
  desc_es,
  desc_fr,
  dev,
  keywords,
  meta,
  name,
  price,
  pub,
  rank,
  release,
  series,
  trailer,
  min_cpu,
  min_gpu,
  min_ram,
  min_vram,
  min_storage,
  rec_cpu,
  rec_ram,
  rec_vram,
  rec_storage,
} from "@/redux/game-add/slice";
import { useDispatch, useSelector } from "react-redux";

export default function GameForm({
  handleFunction,
  err,
  theTags = [],
  thePlat = [],
}) {
  const dispatch = useDispatch();
  const game = useSelector((state: any) => state.gameState);
  return (
    <form
      onSubmit={handleFunction}
      className="w-full flex flex-row md:flex-col justify-between"
    >
      <div className="w-1/3 md:w-full pe-4 h-fit flex flex-col gap-4 md:gap-2">
        <h2 className="text-size-3 capitalize">main info</h2>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="name"
          value={game?.name}
          onChange={(e) => dispatch(name(e.target.value))}
          className="input w-full"
        />
        <input
          type="text"
          name="developer"
          id="developer"
          placeholder="developer"
          value={game?.developer}
          onChange={(e) => dispatch(dev(e.target.value))}
          className="input w-full"
        />
        <input
          type="text"
          name="publisher"
          id="publisher"
          placeholder="publisher"
          value={game?.publisher}
          onChange={(e) => dispatch(pub(e.target.value))}
          className="input w-full"
        />
        <input
          type="text"
          name="release"
          id="release"
          placeholder="release year"
          value={game?.release}
          onChange={(e) => dispatch(release(e.target.value))}
          className="input w-[100px]"
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          value={game?.price}
          onChange={(e) => dispatch(price(e.target.value))}
          className="input w-[100px]"
        />
        <input
          type="number"
          name="metacritic"
          id="metacritic"
          placeholder="metacritic"
          value={game?.metacritic}
          onChange={(e) => dispatch(meta(e.target.value))}
          className="input w-[100px]"
        />
        <input
          type="text"
          name="series"
          id="series"
          placeholder="series"
          value={game?.series}
          onChange={(e) => dispatch(series(e.target.value))}
          className="input w-full"
        />
        <input
          type="text"
          name="rank"
          id="rank"
          placeholder="rank"
          value={game?.rank}
          onChange={(e) => dispatch(rank(e.target.value))}
          className="input w-full"
        />
        <input
          type="text"
          name="trailer"
          id="trailer"
          placeholder="trailer"
          value={game?.trailer}
          onChange={(e) => dispatch(trailer(e.target.value))}
          className="input w-full"
        />
        <textarea
          name="keywords"
          id="keywords"
          required
          placeholder="keywords"
          value={game?.keywords.join(",")}
          onChange={(e) => dispatch(keywords(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
      </div>

      <div className="w-1/3 md:w-full pe-4 h-fit flex flex-col gap-4 md:gap-2">
        <h2 className="text-size-3 capitalize">descriptions</h2>
        <textarea
          name="English"
          id="English"
          placeholder="English"
          value={game?.descriptions?.en}
          onChange={(e) => dispatch(desc_en(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
        <textarea
          name="Arabic"
          id="Arabic"
          placeholder="Arabic"
          value={game?.descriptions?.ar}
          onChange={(e) => dispatch(desc_ar(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
        <textarea
          name="German"
          id="German"
          placeholder="German"
          value={game?.descriptions?.de}
          onChange={(e) => dispatch(desc_de(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
        <textarea
          name="French"
          id="French"
          placeholder="French"
          value={game?.descriptions?.fr}
          onChange={(e) => dispatch(desc_fr(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
        <textarea
          name="Spainish"
          id="Spainish"
          placeholder="Spainish"
          value={game?.descriptions?.es}
          onChange={(e) => dispatch(desc_es(e.target.value))}
          className="input w-full h-[100px]"
        ></textarea>
        {/* Genres */}
        <div className={`w-full h-fit`}>
          <h3 className="text-size-3 capitalize">tags</h3>
          <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-2">
            {allGenres.map((el) => {
              return (
                <Filters
                  data={theTags}
                  name={el}
                  add={add_tag}
                  del={del_tag}
                  dispatch={dispatch}
                  key={el}
                />
              );
            })}
          </div>
        </div>
        <div className={`w-full h-fit`}>
          <h3 className="text-size-3 capitalize">platforms</h3>
          <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-2">
            {platforms.map((el) => {
              return (
                <Filters
                  data={thePlat}
                  name={el}
                  add={add_platform}
                  del={del_platform}
                  dispatch={dispatch}
                  key={el}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-1/3 md:w-full h-fit flex flex-col gap-4 md:gap-2">
        <div className="w-full h-fit flex flex-col gap-2">
          <h2 className="text-size-3 capitalize">minimum</h2>

          <input
            type="text"
            name="minCPU"
            id="minCPU"
            placeholder="minCPU"
            value={game?.req?.min?.CPU}
            onChange={(e) => dispatch(min_cpu(e.target.value))}
            className="input w-full"
          />
          <input
            type="text"
            name="minGPU"
            id="minGPU"
            placeholder="minGPU"
            value={game?.req?.min?.GPU}
            onChange={(e) => dispatch(min_gpu(e.target.value))}
            className="input w-full"
          />
          <input
            type="number"
            name="minRAM"
            id="minRAM"
            placeholder="minRAM"
            value={game?.req?.min?.RAM}
            onChange={(e) => dispatch(min_ram(e.target.value))}
            className="input w-[100px]"
          />
          <input
            type="number"
            name="minVRAM"
            id="minVRAM"
            placeholder="minVRAM"
            value={game?.req?.min?.VRAM}
            onChange={(e) => dispatch(min_vram(e.target.value))}
            className="input w-[100px]"
          />
          <input
            type="number"
            name="minStorage"
            id="minStorage"
            placeholder="minStorage"
            value={game?.req?.min?.storage}
            onChange={(e) => dispatch(min_storage(e.target.value))}
            className="input w-[100px]"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2">
          <h2 className="text-size-3 capitalize">recomanded</h2>
          <input
            type="text"
            name="recCPU"
            id="recCPU"
            placeholder="recCPU"
            value={game?.req?.rec?.CPU}
            onChange={(e) => dispatch(rec_cpu(e.target.value))}
            className="input w-full"
          />
          <input
            type="text"
            name="recGPU"
            id="recGPU"
            placeholder="recGPU"
            value={game?.req?.rec?.GPU}
            onChange={(e) => dispatch(rec_cpu(e.target.value))}
            className="input w-full"
          />
          <input
            type="number"
            name="recRAM"
            id="recRAM"
            placeholder="recRAM"
            value={game?.req?.rec?.RAM}
            onChange={(e) => dispatch(rec_ram(e.target.value))}
            className="input w-[100px]"
          />
          <input
            type="number"
            name="recVRAM"
            id="recVRAM"
            placeholder="recVRAM"
            value={game?.req?.rec?.VRAM}
            onChange={(e) => dispatch(rec_vram(e.target.value))}
            className="input w-[100px]"
          />
          <input
            type="number"
            name="recStorage"
            id="recStorage"
            placeholder="recStorage"
            value={game?.req?.rec?.storage}
            onChange={(e) => dispatch(rec_storage(e.target.value))}
            className="input w-[100px]"
          />
        </div>
        <button className="btn-accent">submit</button>
        {err}
      </div>
    </form>
  );
}

/*

  name //
  developer //
  publisher //
  series //
  rank //
  trailer //
  keywords //

  release //
  price //
  metacritic //


  descriptions  (en, ar, de, fr, es) //

  tags //
  platforms //
  dlcs  ***

  min (CPU, GPU, RAM, VRAM, storage)  //
  rec (CPU, GPU, RAM, VRAM, storage)  //

*/
