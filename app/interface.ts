export interface IData {
  tvExplanationInfo: IExplanation;
}

export interface IExplanation {
  list_total_count: [number];
  RESULT: [
    {
      CODE: [string];
      MESSAGE: [string];
    }
  ];
  row: IRow[];
}

export interface IRow {
  TITLE: [string];
  PUBDATE: [string];
  LINK: [string];
  IMAGES: [string];
  CN: [string];
  TOP_NOTICE_YN: [string];
  NOTICE_YN: [string];
  WORK_DTTM: [string];
}
