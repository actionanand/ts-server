import { Request, Response, NextFunction } from 'express';

export function addResponseMetaData(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.set({
    server: 'Ts-Server',
    Author: 'Anand Raja',
  });
  next();
}
