import type { AuthType } from "../types/states"

interface AuthStateType {
    user: null | AuthType;
}

interface LoginType {
    type: 'LOGIN';
    payload: AuthType;
}

interface LogoutType {
    type: 'LOGOUT';
}

export type ReducerActionType = LoginType | LogoutType;

export type ReducerType = (state: AuthStateType, action: ReducerActionType) => AuthStateType;

export interface AuthContextType {
    state: AuthStateType;
    dispatch: ({type, payload}: ReducerActionType) => AuthStateType;
}