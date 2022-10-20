// @ts-check

import { useEffect } from "preact/hooks";
import useWorkoutsContext from "../hooks/useWorkoutsContext"
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";

export const Home = () => {
  /**
   * @type {import("../context/WorkoutsContext").WorkoutContextType}
   */
  const { state, dispatch } = useWorkoutsContext()

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch("/api/workouts");
      /**
       * @type {import("../types/workouts").WorkoutType[]}
       */
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div class="home">
      <ul>
        {state.workouts &&
          state.workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
      </ul>
      <WorkoutForm />
    </div>
  );
};
