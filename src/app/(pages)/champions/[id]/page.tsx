import { BASE_URL } from "@/app/constants";
import { ChampionsDetail } from "@/types/Champion";
import { fetchChampionsDetail } from "@/utils/serverApi";
import Image from "next/image";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const ChampionDetailPage = async ({ params }: DetailPageProps) => {
  const resolve = await params;
  const { data } = await fetchChampionsDetail(resolve.id);
  const championInfo: ChampionsDetail = data[resolve.id];
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600">{championInfo.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{championInfo.title}</h2>

      <Image
        src={`${BASE_URL.RIOT_IMAGE}/champion/${championInfo.image.full}`}
        alt={championInfo.name}
        className="mx-auto"
        width={200}
        height={200}
      />
      <p className="mt-4 text-red-600 font-bold">{championInfo.lore}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-red-600">스텟</h3>
        <ul className="list-disc list-inside">
          <li className="text-red-600 font-bold">
            공격력 : {championInfo.info.attack}
          </li>
          <li className="text-red-600 font-bold">
            방어력 : {championInfo.info.defense}
          </li>
          <li className="text-red-600 font-bold">
            마법력 : {championInfo.info.magic}
          </li>
          <li className="text-red-600 font-bold">
            난이도 : {championInfo.info.difficulty}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
