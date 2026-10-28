import { Request, Response } from 'express';
import { parse } from 'cookie';

export function checkXsrf(req: Request, res: Response) {
  const cookie = parse(req.headers.cookie ?? '')['CSRF-TOKEN'];
  const header = req.headers['x-csrf-token'];

  req.log.info(`CSRF-TOKEN cookie: ${cookie}, X-CSRF-TOKEN header: ${header}`);

  if (!header || header !== cookie) {
    res.sendStatus(403);
    return;
  }

  res.sendStatus(200);
}
