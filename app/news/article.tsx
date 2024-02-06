export default function Article({ info }: { info: any }) {
  return (
    <li className="rounded-xl shadow-xl w-2/3 m-auto my-5 p-5">
      <div>{info.TITLE[0]}</div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <span className="px-2 py-1 text-white rounded-md mx-1 bg-purple-700">
            {info.PUBDATE[0]}
          </span>
        </div>
        <a
          target="_blank"
          className="px-2 py-1 text-white rounded-md mx-1 bg-blue-700"
          href={info.LINK[0]}
        >
          바로가기
        </a>
      </div>
    </li>
  );
}
