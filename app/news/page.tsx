"use client";

import { useEffect, useRef, useState } from "react";
import { parseString } from "xml2js";
import { IRow } from "../interface";
import { Metadata } from "next";
import { NEWS_API_URL } from "../constants";
import Article from "./article";
import Loading from "../explanation/loading";

async function getData(index: number) {
  const res = await fetch(
    NEWS_API_URL + (index * 20 + 1) + "/" + (index + 1) * 20
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status : ${res.status}`);
  }
  const xmlData = await res.text();

  return new Promise((resolve, reject) => {
    parseString(xmlData, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const metadata: Metadata = {
  title: "Explanation | Seoul City",
  description: "Seoul City Explanation",
};

export default function Home() {
  const conRef = useRef<HTMLUListElement>(null);
  const listCount = useRef(0);

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<IRow[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(Infinity);

  useEffect(() => {
    setIsLoading(true);
    getData(currentPage).then((data: any) => {
      setIsLoading(false);

      console.log(data);

      if (data) {
        setList([...list, ...data.tvReportedInfo.row]);
        listCount.current += data.tvReportedInfo.row.length;
        if (totalCount === Infinity) {
          setTotalCount(
            Number(data.tvReportedInfo.list_total_count[0]) as number
          );
        }
      }
    });
  }, [currentPage]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (list.length < totalCount) setCurrentPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (conRef.current && listCount.current > 0 && !isLoading) {
      observer.observe(conRef.current.lastChild as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, [currentPage, list, isLoading]);
  return (
    <main>
      <ul ref={conRef} className="px-50">
        {list.map((info) => (
          <Article info={info} key={info.TITLE[0]} />
        ))}
      </ul>
      {isLoading && <Loading />}
    </main>
  );
}
