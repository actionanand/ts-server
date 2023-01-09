import { Request, Response } from 'express';
import { OLDAPI, NEWAPI } from '../../db/db-data-extra';

export function getOldApi(req: Request, res: Response) {
  // res.status(200).json({payload:Object.values(OLDAPI)});
  res.status(200).json(OLDAPI);
}

export function getNewApi(req: Request, res: Response) {
  // res.status(200).json({payload:Object.values(NEWAPI)});
  res.status(200).json(NEWAPI);
}
