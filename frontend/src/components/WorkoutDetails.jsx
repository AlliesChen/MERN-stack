// @ts-check

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import useAuthContext from '../hooks/useAuthContext';

/**
 * @param {{workout: import('../types/states').WorkoutType}} props
 * @returns {JSX.Element}
 */
export function WorkoutDetails({ workout }) {
  /**
   * @type {import("../context/WorkoutsContext").WorkoutContextType}
   */
  const { dispatch } = useWorkoutsContext();
  /**
   * @type {import("../context/AuthContext").AuthContextType}
   */
  const { state: userState } = useAuthContext()
  async function handleClick() {
    if (!userState.user) {
      return
    }
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${userState.user?.token}`
      }
    });
    /**
     * @type {import("../types/states").WorkoutType}
     */
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  }

  return (
    <li className="workout-details" key={workout._id}>
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
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </li>
  );
}
