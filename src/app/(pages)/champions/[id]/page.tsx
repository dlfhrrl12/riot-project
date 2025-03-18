import { BASE_URL } from "@/app/constants";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championData: Record<string, ChampionDetail> =
    await fetchChampionDetail(params.id);

  const champion = championData[params.id];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600">{champion.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{champion.title}</h2>

      <Image
        src={`${BASE_URL.RIOT_IMAGE}/champion/${champion.image.full}`}
        alt={champion.name}
        className="mx-auto"
        width={200}
        height={200}
      />
      <p className="mt-4 text-red-600 font-bold">{champion.lore}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-red-600">스텟</h3>
        <ul className="list-disc list-inside">
          <li className="text-red-600 font-bold">
            공격력 : {champion.info.attack}
          </li>
          <li className="text-red-600 font-bold">
            방어력 : {champion.info.defense}
          </li>
          <li className="text-red-600 font-bold">
            마법력 : {champion.info.magic}
          </li>
          <li className="text-red-600 font-bold">
            난이도 : {champion.info.difficulty}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
