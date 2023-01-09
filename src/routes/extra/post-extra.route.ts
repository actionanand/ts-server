import { Request, Response } from 'express';
import { OLDAPI, NEWAPI } from '../../db/db-data-extra';

export function postOldApi(_req: Request, res: Response) {
  // res.status(200).json({payload:Object.values(OLDAPI)});
  res.status(200).json(OLDAPI);
}

export function postNewApi(_req: Request, res: Response) {
  // res.status(200).json({payload:Object.values(NEWAPI)});
  res.status(200).json(NEWAPI);
}
