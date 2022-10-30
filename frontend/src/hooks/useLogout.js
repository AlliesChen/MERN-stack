// @ts-check

import useAuthContext from './useAuthContext'
import useWorkoutsContext from './useWorkoutsContext'

export default function useLogout() {
    /**
   * @type {import("../context/AuthContext").AuthContextType}
   */
    const { dispatch } = useAuthContext();
    /**
   * @type {import("../context/WorkoutsContext").WorkoutContextType}
   */
    const { dispatch: workoutDispatch } = useWorkoutsContext()
    function logout() {
        fetch('/api/user/logout')

        // remove user from storage
        localStorage.removeItem('user')
        
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: []})
    }

    return { logout }
}