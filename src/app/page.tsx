import Image from "next/image";
import Link from "next/link";
import champion from "../public/champion.webp";
import item from "../public/item.webp";
import rotation from "../public/rotation.webp";

const navigation = [
  { imgSrc: champion, href: "/champions", name: "채피언 목록 보기" },
  { imgSrc: item, href: "/rotation", name: "금주 로테이션 확인" },
  { imgSrc: rotation, href: "/items", name: "아이템 목록 보기" },
];

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">
          리그오브 레전드 정보 앱
        </h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <div className="mt-[40px] flex flex-col justify-center gap-10">
        {navigation.map((gate) => (
          <div className="flex flex-col justify-center gap-10" key={gate.href}>
            <Link
              href={gate.href}
              className="flex flex-col justify-center items-center gap-5 text-amber-400"
            >
              <div className="relative w-[400px] h-[300px] ">
                <Image
                  src={gate.imgSrc}
                  alt={gate.name}
                  className="h-full w-full inset-0 object-fill bg-cover"
                />
              </div>
              {gate.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
