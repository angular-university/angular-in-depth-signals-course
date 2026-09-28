import { Request, Response } from 'express';

export function echoXsrf(req: Request, res: Response) {
  const token = req.headers['x-xsrf-token'];

  req.log.info(`X-XSRF-TOKEN: ${token}`);

  res.status(200).json({ token: token ?? null });
}
