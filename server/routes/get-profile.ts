import { Request, Response } from 'express';

export function getProfile(req: Request, res: Response) {
  res.cookie('my-xsrf-token', 'abc123', { sameSite: 'strict' });

  const authorization = req.headers.authorization;

  if (!authorization) {
    req.log.warn('Profile requested without an Authorization header');
    res.status(401).json({ message: 'Missing Authorization header' });
    return;
  }

  req.log.info('Returning profile');

  res.status(200).json({ authorization });
}
