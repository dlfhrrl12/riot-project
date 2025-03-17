import { BASE_URL } from "@/app/constants";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";

export const fetchItemList = async (): Promise<Record<string, Item>> => {
  const res = await fetch(`${BASE_URL.RIOT_API}/item.json`);

  if (!res.ok) throw new Error(`HTTP 오류: ${res.status}`);

  const data = await res.json();
  return data.data;
};

export const fetchChampionList = async (): Promise<
  Record<string, Champion>
> => {
  const res = await fetch(`${BASE_URL.RIOT_API}/champion.json`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`HTTP 오류: ${res.status}`);

  const data = await res.json();
  return data.data;
};

export const fetchChampionDetail = async (
  id: string
): Promise<Record<string, ChampionDetail>> => {
  const res = await fetch(`${BASE_URL.RIOT_API}/champion/${id}.json`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};

export const getRotationChampionList = async (): Promise<Champion[]> => {
  const res = await fetch("/api/rotation");
  if (!res.ok) throw new Error("로테이션 API 호출 오류");
  return res.json();
};
