// @ts-check

import { useState } from "preact/hooks";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

export const WorkoutForm = () => {

  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([''])

  /**
   * @param {Event} e
   */
  async function handleSubmit(e) {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
      setEmptyFields([]);
      console.log("new workout added", json);
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form class="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exercise Title:</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        class={emptyFields.includes('title') ? 'error' : ''}
      />

      <label htmlFor="load">Load (in kg):</label>
      <input
        type="number"
        id="load"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        class={emptyFields.includes('load') ? 'error' : ''}
      />

      <label htmlFor="reps">Reps:</label>
      <input
        type="number"
        id="reps"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        class={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button type="submit">Add Workout</button>
      {error && <div class="error">{error}</div>}
    </form>
  );
};
