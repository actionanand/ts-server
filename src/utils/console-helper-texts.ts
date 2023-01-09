import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

export function incomingReqInfo(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(
    chalk`IP : {magenta ${req.ip}} , Origin : {yellow ${req.header(
      'Origin',
    )}} , Method : {red ${req.method}} , URL : {green ${req.url}}`,
  );
  next();
}
