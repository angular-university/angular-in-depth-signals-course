import { Request, Response } from 'express';

export function setXsrfCookie(req: Request, res: Response) {
  res.cookie('my-xsrf-token', 'abc123', { sameSite: 'strict' });
  res.sendStatus(204);
}
