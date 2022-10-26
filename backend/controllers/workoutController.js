const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

// get all workouts
async function getWorkouts(req, res) {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  // res.set('Access-Control-Allow-Origin', '*')
  res.status(200).json(workouts);
}

// get a single workout
async function getWorkout(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);

  return null;
}

// create a new workout
async function createWorkout(req, res) {
  const { title, load, reps } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (!reps) {
    emptyFields.push('reps');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
  }

  // add a doc to db
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({
      title,
      reps,
      load,
      user_id,
    });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  return null;
}
// delete a workout
async function deleteWorkout(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);

  return null;
}

// update a workout
async function updateWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body,
  });

  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);

  return null;
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
