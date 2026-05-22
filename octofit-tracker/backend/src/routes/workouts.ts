import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/workouts/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Workouts endpoint' });
});

export default router;
