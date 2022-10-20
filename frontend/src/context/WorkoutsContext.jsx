// @ts-check

import { createContext } from "preact";
import { useReducer } from "preact/hooks";

export const WorkoutsContext = createContext({})

/**
 * @type {import("./WorkoutsContext").ReducerType}
 */
export const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
            }
        default:
            return state
    }

}

/**
 * @param {{children: JSX.Element}} props
 * @returns {JSX.Element}
 */
export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: []
    })
    return (
        <WorkoutsContext.Provider value={{state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}