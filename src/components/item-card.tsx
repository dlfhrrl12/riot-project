import { BASE_URL } from "@/app/constants";
import { Item } from "@/types/Items";
import Image from "next/image";
import React from "react";

interface ItemCardProps {
  item: Item;
  id: string;
}

const ItemCards = ({ item, id }: ItemCardProps) => {
  return (
    <div className="border rounded p-4 hover:shadow-lg" key={id}>
      <Image
        src={`${BASE_URL.RIOT_IMAGE}/item/${item.image.full}`}
        width={100}
        height={100}
        alt={item.name}
        className="mx-auto"
      />
      <h2 className="mt-2 text-xl font-semibold text-red-600">{item.name}</h2>
    </div>
  );
};

export default ItemCards;
