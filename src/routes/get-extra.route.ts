import { Request, Response } from 'express';
import { COURSES } from '../db/db-data-extra';



export function getExtraData(req: Request, res: Response) {

    res.status(200).json({payload:Object.values(COURSES)});

}