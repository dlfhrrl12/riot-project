import ChampionCard from "@/components/champion-card";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";

const ChampionList = async () => {
  const champions: Record<string, Champion> = await fetchChampionList();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-600">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        <Suspense>
          {Object.entries(champions).map(([id, champion]) => (
            <ChampionCard key={id} id={id} champion={champion} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ChampionList;
