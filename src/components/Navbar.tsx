import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="container mx-auto">
        <ul className="flex justify-around space-x-8 text-white">
          <li className="hover:text-yellow-400 font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-yellow-400 font-bold">
            <Link href={"/champions"}>챔피언 목록</Link>
          </li>
          <li className="hover:text-yellow-400 font-bold">
            <Link href={"/items"}>아이템 목록</Link>
          </li>
          <li className="hover:text-yellow-400 font-bold">
            <Link href={"/rotation"}>챔피언 로테이션</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
