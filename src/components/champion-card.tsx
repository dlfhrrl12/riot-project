import { BASE_URL } from "@/app/constants";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface ChampionCardProps {
  id: string;
  champion: Champion;
}

const ChampionCard = ({ id, champion }: ChampionCardProps) => {
  return (
    <Link
      href={`/champions/${id}`}
      className="border rounded p-4 hover:shadow-lg relative"
    >
      <Image
        src={`${BASE_URL.RIOT_IMAGE}/champion/${champion.image.full}`}
        className="mx-auto"
        alt={champion.name}
        width={100}
        height={100}
      />
      <h2 className="mt-2 text-xl font-semibold text-red-600">
        {champion.name}
      </h2>
    </Link>
  );
};

export default ChampionCard;
