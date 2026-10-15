import { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

const CHUNK_DELAY_MS = 30;

export function uploadFile(req: Request, res: Response) {
  let size = 0;

  req.on('data', (chunk: Buffer) => {
    size += chunk.length;
    req.pause();
    setTimeout(() => req.resume(), CHUNK_DELAY_MS);
  });

  req.on('end', () => {
    req.log.info(`Received upload of ${size} bytes`);
    const id = randomUUID();
    res.status(201).json({ id, url: `/api/uploads/${id}`, size });
  });
}
