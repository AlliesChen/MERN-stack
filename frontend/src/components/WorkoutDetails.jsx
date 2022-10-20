// @ts-check

import useWorkoutsContext from '../hooks/useWorkoutsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

/**
 * @param {{workout: import('../types/workouts').WorkoutType}} props
 * @returns {JSX.Element}
 */
export const WorkoutDetails = ({ workout }) => {
  /**
   * @type {import("../context/WorkoutsContext").WorkoutContextType}
   */
  const { dispatch } = useWorkoutsContext()

  async function handleClick() {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    
    const json = await response.json()
    
    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <li class="workout-details" key={workout._id}>
      <h3>{workout.title}</h3>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span class="material-symbols-outlined" onClick={handleClick}>delete</span>
    </li>
  );
};
