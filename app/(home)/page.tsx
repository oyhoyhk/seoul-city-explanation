import { useEffect } from "react";
import { API_URL } from "../constants";
import { parseString } from "xml2js";
import { link } from "fs";
import { IData } from "../interface";

async function getData() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status : ${res.status}`);
  }
  const xmlData = await res.text();

  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export default async function Home() {
  const data = (await getData()) as IData;

  console.log(data);
  console.log(data.tvExplanationInfo.row[0]);
  return (
    <main>
      <ul className="px-50">
        {data.tvExplanationInfo.row.map((info) => (
          <li key={info.TITLE[0]}>
            <span>{info.TITLE[0]}</span>
            <a href={info.LINK[0]} target="_blank">
              Link
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
