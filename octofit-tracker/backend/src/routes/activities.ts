import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/activities/
router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Activities endpoint' });
});

export default router;
