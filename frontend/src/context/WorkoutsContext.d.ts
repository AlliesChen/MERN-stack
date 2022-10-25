import type { JSX, PreactContext } from "preact";
import type { WorkoutType } from "../types/states"

type WorkoutStateType = {
    workouts: WorkoutType[]
}

interface SetWorkoutsType {
    type: 'SET_WORKOUTS';
    payload: WorkoutType[];
}

interface CreateAndDeleteWorkoutsType {
    type: 'CREATE_WORKOUT' | 'DELETE_WORKOUT';
    payload: WorkoutType;
}

export type ReducerActionType = SetWorkoutsType | CreateAndDeleteWorkoutsType

export type ReducerType = (state: WorkoutStateType, action: ReducerActionType) => WorkoutStateType

export interface WorkoutContextType {
    state: WorkoutStateType;
    dispatch: ({type, payload}: ReducerActionType) => WorkoutType[]
}

export declare const WorkoutsContext: PreactContext<WorkoutContextType>

export declare function WorkoutsContextProvider(props: {children: JSX.Element}): JSX.Element