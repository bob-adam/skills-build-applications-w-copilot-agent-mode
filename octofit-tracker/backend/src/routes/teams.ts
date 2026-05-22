import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/teams/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Teams endpoint' });
});

export default router;
