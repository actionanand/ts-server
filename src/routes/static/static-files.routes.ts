import { Request, Response } from 'express';

import path from 'path';
import fetch from 'node-fetch';

export function getPdfStatic(_req: Request, res: Response) {
  res
    .status(200)
    .sendFile(path.join(__dirname + '../../../db/static-files/sample.pdf'));
}

export async function getPdfBlob(_req: Request, res: Response) {
  const url =
    'https://docs.google.com/spreadsheets/d/1fLjKASR_g5wsvOjjJi6RclqMVd2o_1On-OfimXtId4E/export?exportFormat=pdf&format=pdf&size=A4&fzr=true&gid=477517973&sheetnames=false&printtitle=false&pagenumbers=false&gridlines=false&portrait=true&fitw=true&fith=true&top_margin=0.20&bottom_margin=0.20&left_margin=0.20&right_margin=0.20';
  let buf = await fetch(url).then((r) => r.arrayBuffer());
  const data = Buffer.from(buf).toString('base64');
  const uri = 'data:application/pdf;base64,' + data;

  res.status(200).send(uri);
}

export function getHtmlSample(_req: Request, res: Response) {
  res
    .status(200)
    .sendFile(path.join(__dirname + '../../../db/static-files/sample.html'));
}
