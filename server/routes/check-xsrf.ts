import { Request, Response } from 'express';
import { parse } from 'cookie';

export function checkXsrf(req: Request, res: Response) {
  const cookie = parse(req.headers.cookie ?? '')['my-xsrf-token'];
  const header = req.headers['x-my-xsrf-token'];

  req.log.info(`my-xsrf-token cookie: ${cookie}, X-My-Xsrf-Token header: ${header}`);

  if (!header || header !== cookie) {
    res.sendStatus(403);
    return;
  }

  res.sendStatus(200);
}
