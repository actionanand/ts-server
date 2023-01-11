import { Request, Response } from 'express';

import path from 'path';
import fetch from 'node-fetch';

export function getPdfStatic(_req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/static-files/sample.pdf'));
}

export async function getPdfRemote(_req: Request, res: Response) {
  const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  
  const pdfData = await fetch(url);

  const pdfArrayBuffer = await pdfData.arrayBuffer();

  const stringifiedBuffer = Buffer.from(pdfArrayBuffer, 'base64');
  // console.log(stringifiedBuffer);
  const contentType = pdfData.headers.get('content-type');

  res.type('application/pdf');
  res.setHeader('Content-Type', contentType);
  // res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf'); // to download pdf automatically

  res.status(200).send(stringifiedBuffer);
}

export function getHtmlSample(_req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/static-files/sample.html'));
}
