// @ts-check

import { useEffect } from 'preact/hooks';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import { WorkoutDetails } from '../components/WorkoutDetails';
import { WorkoutForm } from '../components/WorkoutForm';
import useAuthContext from '../hooks/useAuthContext'

export function Home() {
  /**
   * @type {import("../context/WorkoutsContext").WorkoutContextType}
   */
  const { state, dispatch } = useWorkoutsContext();
  /**
   * @type {import("../context/AuthContext").AuthContextType}
   */
  const { state: userState } = useAuthContext();

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch('/api/workouts');
      /**
       * @type {import("../types/states").WorkoutType[]}
       */
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    }

    if (userState.user) {
      fetchWorkouts();
    }

  }, [dispatch, userState.user]);

  return (
    <div className="home">
      <ul>
        {state.workouts
          && state.workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </ul>
      <WorkoutForm />
    </div>
  );
}
