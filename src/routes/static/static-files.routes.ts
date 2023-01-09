import { Request, Response } from 'express';

import path from 'path';

export function getPdfStatic(_req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/static-files/sample.pdf'));
}

export function getHtmlSample(_req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/static-files/sample.html'));
}