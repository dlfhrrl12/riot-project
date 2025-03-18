import ChampionCard from "@/components/champion-card";
import { Champion } from "@/types/Champion";
import { fetchChampions } from "@/utils/serverApi";

const ChampionList = async () => {
  const { data } = await fetchChampions();
  const dataArr: Champion[] = Object.values(data);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-600">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {dataArr.map((item) => (
          <ChampionCard key={item.name} champion={item} />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
