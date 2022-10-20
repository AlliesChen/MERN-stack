import type { JSX, PreactContext } from "preact";
import type { WorkoutType } from "src/types/workouts";

type WorkoutStateType = {
    workouts: WorkoutType[]
}

export interface ReducerActionType {
    type: 'SET_WORKOUTS' | 'CREATE_WORKOUT' | 'DELETE_WORKOUT';
    payload: WorkoutType[] | WorkoutType
}

export interface WorkoutContextType {
    state: WorkoutStateType;
    dispatch: ({type, payload}: ReducerActionType) => WorkoutType[]
}

export declare const WorkoutsContext: PreactContext<WorkoutContextType>

export type ReducerType = (state: WorkoutStateType, action: ReducerActionType) => {workouts: WorkoutType[]}

export declare function WorkoutsContextProvider(props: {children: JSX.Element}): JSX.Element