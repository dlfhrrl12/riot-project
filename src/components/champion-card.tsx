import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <Link
      href={`/champions/${champion.id}`}
      className="border rounded p-4 hover:shadow-lg relative"
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
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
