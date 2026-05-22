import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app = express();
const port = Number(process.env.PORT) || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    port,
    baseUrl,
    mongo: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

const start = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${mongoUri}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }

  app.listen(port, () => {
    console.log(`OctoFit backend listening on ${baseUrl}`);
  });
};

start();
