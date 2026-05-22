/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Workout from '../models/Workout';

const mongoUri = 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  console.log('Seed the octofit_db database with test data');
  await mongoose.connect(mongoUri);
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({})
  ]);

  // Teams
  const teamAlpha = await Team.create({ name: 'Alpha' });
  const teamBeta = await Team.create({ name: 'Beta' });

  // Users
  const alice = await User.create({
    username: 'alice',
    email: 'alice@example.com',
    password: 'hashedpassword1',
    team: teamAlpha._id,
    profile: { age: 28, gender: 'female', height: 165, weight: 60 }
  });
  const bob = await User.create({
    username: 'bob',
    email: 'bob@example.com',
    password: 'hashedpassword2',
    team: teamAlpha._id,
    profile: { age: 32, gender: 'male', height: 180, weight: 80 }
  });
  const carol = await User.create({
    username: 'carol',
    email: 'carol@example.com',
    password: 'hashedpassword3',
    team: teamBeta._id,
    profile: { age: 25, gender: 'female', height: 170, weight: 65 }
  });
  await Team.findByIdAndUpdate(teamAlpha._id, { $set: { members: [alice._id, bob._id] } });
  await Team.findByIdAndUpdate(teamBeta._id, { $set: { members: [carol._id] } });

  // Workouts
  const workout1 = await Workout.create({
    name: 'Morning Cardio',
    description: '30 minutes of running',
    difficulty: 'medium',
    duration: 30,
    suggestedFor: ['weight loss', 'endurance']
  });
  const workout2 = await Workout.create({
    name: 'Strength Training',
    description: 'Full body workout',
    difficulty: 'hard',
    duration: 45,
    suggestedFor: ['muscle gain']
  });

  // Activities
  await Activity.create({
    user: alice._id,
    type: 'running',
    duration: 30,
    calories: 300,
    date: new Date()
  });
  await Activity.create({
    user: bob._id,
    type: 'cycling',
    duration: 45,
    calories: 400,
    date: new Date()
  });
  await Activity.create({
    user: carol._id,
    type: 'yoga',
    duration: 60,
    calories: 200,
    date: new Date()
  });

  // Leaderboard
  await Leaderboard.create({ user: alice._id, score: 120, rank: 1, week: '2026-W21' });
  await Leaderboard.create({ user: bob._id, score: 100, rank: 2, week: '2026-W21' });
  await Leaderboard.create({ user: carol._id, score: 80, rank: 3, week: '2026-W21' });

  console.log('Seed complete!');
  await mongoose.disconnect();
}

seed().catch(e => { console.error(e); process.exit(1); });
