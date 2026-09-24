import { Request, Response } from 'express';
import { COURSES } from '../db-data.js';

const RESPONSE_DELAY_MS = 1500;

export function getCourse(req: Request, res: Response) {
  const courseId = Number(req.params['id']);

  const course = COURSES[courseId];

  if (!course) {
    req.log.warn(`Course not found: ${courseId}`);
    setTimeout(() => res.status(404).json({ message: `Course not found: ${courseId}` }), RESPONSE_DELAY_MS);
    return;
  }

  req.log.info(`Returning course ${courseId}`);

  setTimeout(() => res.status(200).json(course), RESPONSE_DELAY_MS);
}
