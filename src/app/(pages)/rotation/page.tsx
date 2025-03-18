"use client";

import ChampionCard from "@/components/champion-card";
import { getChampionRotation } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

const RotationList = () => {
  const fetchData = async () => {
    const res = await getChampionRotation();
    return res;
  };

  const {
    data: rotationList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rotationList"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <div className="text-2xl font-bold text-red-600">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-2xl font-bold text-red-600">
        오류가 발생 했습니다. 다시 시도해주세요.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotationList?.map((item) => {
          return <ChampionCard key={item.id} champion={item} />;
        })}
      </div>
    </div>
  );
};

export default RotationList;
