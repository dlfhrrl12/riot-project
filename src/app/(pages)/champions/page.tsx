import ChampionCard from "@/components/champion-card";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionList = async () => {
  const champions: Record<string, Champion> = await fetchChampionList();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-600">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(champions).map(([id, champion]) => (
          <ChampionCard key={id} id={id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
