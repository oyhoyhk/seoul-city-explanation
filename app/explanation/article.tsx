const extractData = (
  str: string
): { type: string; title: string; date: string; from: string } => {
  const result = [];
  let start = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      if (start >= 0) {
        result.push(str.slice(start + 1, i));
      }
      start = i;
    }
    if (str[i] === ")") {
      result.push(str.slice(start + 1, i));
      start = i + 1;
    }
  }
  if (start !== str.length) {
    result.push(str.slice(start));
  }
  return {
    type: result[0] as string,
    title: result[1].replaceAll("&#039;", "'") as string,
    date: (result[2]?.split(" ")[0].replaceAll(",", "") as string) || "",
    from: (result[2]?.split(" ")[1] as string) || "",
  };
};

export default function Article({ info }: { info: any }) {
  const { type, title, date, from } = extractData(info.TITLE[0]);
  return (
    <li className="rounded-xl shadow-xl w-2/3 m-auto my-5 p-5">
      <div>{title}</div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <span
            className={
              (type === "해명자료" ? "bg-red-600" : "bg-blue-600") +
              " px-2 py-1 text-white rounded-md mx-1"
            }
          >
            {type}
          </span>
          {date && (
            <span className="px-2 py-1 text-white rounded-md mx-1 bg-purple-700">
              {date}
            </span>
          )}
          {from && (
            <span className="px-2 py-1 text-white rounded-md mx-1 bg-gray-700">
              {from}
            </span>
          )}
        </div>
        <a
          href={info.LINK[0]}
          target="_blank"
          className="px-2 py-1 text-white rounded-md mx-1 bg-blue-700"
        >
          바로가기
        </a>
      </div>
    </li>
  );
}
