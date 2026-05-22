import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/leaderboard/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Leaderboard endpoint' });
});

export default router;
