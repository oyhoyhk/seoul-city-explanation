import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen mx-auto bg-white flex flex-col items-center justify-center ">
      <h1 className="text-center text-2xl font-bold">
        서울시 해명 / 보도 자료 모음
      </h1>
      <div className="flex justify-around mt-16">
        <div
          className="rounded-xl border-gray-400 border-2 mx-5 w-64 h-32 flex justify-center items-center text-2xl
         px-5 py-2.5  text-gray-400 transition-colors font-semibold hover:text-red-500 hover:border-red-500 "
        >
          <Link
            href="/explanation"
            className="flex w-full h-full justify-center items-center"
          >
            서울시 해명 자료
          </Link>
        </div>
        <div
          className="rounded-xl border-gray-400 border-2 mx-5 w-64 h-32 flex justify-center items-center text-2xl
         px-5 py-2.5  text-gray-400 transition-colors font-semibold hover:text-blue-500 hover:border-blue-500 "
        >
          <Link
            href="/news"
            className="flex w-full h-full justify-center items-center"
          >
            서울시 보도 자료
          </Link>
        </div>
      </div>
    </div>
  );
}
