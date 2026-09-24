import { Request, Response } from 'express';
import { COURSES } from '../db-data.js';

const RESPONSE_DELAY_MS = 1500;

export function searchCourses(req: Request, res: Response) {
  const query = String(req.body?.query ?? '').toLowerCase();

  const courses = Object.values(COURSES)
    .filter((course) => course.title.toLowerCase().includes(query))
    .sort((c1, c2) => c1.seqNo - c2.seqNo);

  req.log.info(`Search "${query}" matched ${courses.length} courses`);

  setTimeout(() => res.status(200).json(courses), RESPONSE_DELAY_MS);
}
