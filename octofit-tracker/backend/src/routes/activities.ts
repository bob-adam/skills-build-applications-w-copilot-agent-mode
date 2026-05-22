import { Router, Request, Response } from 'express';

const router = Router();
const activities = [
  {
    type: 'running',
    duration: 30,
    calories: 300,
    date: '2026-05-20T18:00:00.000Z'
  },
  {
    type: 'cycling',
    duration: 45,
    calories: 400,
    date: '2026-05-21T18:00:00.000Z'
  },
  {
    name: 'Manga Maniacs',
    description: 'Explore the fantastic stories of the most interesting characters from Japanese Manga (graphic novels).',
    schedule: 'Tuesdays at 7pm',
    maxAttendance: 15
  }
];

// GET /api/activities/
router.get('/', (_req: Request, res: Response) => {
  res.json(activities);
});

export default router;
