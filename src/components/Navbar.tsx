import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-around">
        <Link href={"/"} className="hover:text-yellow-400 font-bold">
          Home
        </Link>
        <Link href={"/champions"} className="hover:text-yellow-400 font-bold">
          챔피언 목록
        </Link>
        <Link href={"/items"} className="hover:text-yellow-400 font-bold">
          아이템 목록
        </Link>
        <Link href={"/rotation"} className="hover:text-yellow-400 font-bold">
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
}
