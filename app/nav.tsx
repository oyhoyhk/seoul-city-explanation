"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-m flex justify-center items-center sticky top-0 bg-white">
      <div className="w-2/3 m-auto h-15 flex items-center border-b-2 border-gray-300 py-4 justify-between">
        <img src="/logo.jpg" alt="logo" width="100px" />
        <nav className="flex h-full">
          <div
            className={`mx-3 ${
              pathname === "/" ? "text-black" : "text-gray-400"
            }`}
          >
            <Link href="/">홈</Link>
          </div>
          <div
            className={`mx-3 ${
              pathname === "/explanation" ? "text-black" : "text-gray-400"
            }`}
          >
            <Link href="/explanation">해명자료</Link>
          </div>
          <div
            className={`mx-3 ${
              pathname === "/news" ? "text-black" : "text-gray-400"
            }`}
          >
            <Link href="/news">보도자료</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
