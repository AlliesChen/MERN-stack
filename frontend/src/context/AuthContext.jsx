// @ts-check

import { createContext } from 'preact';
import { useEffect, useReducer } from 'preact/hooks';

export const AuthContext = createContext(null);

/**
 * @type {import("./AuthContext").ReducerType}
 */
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

/**
 * @param {{children: JSX.Element}} props
 * @returns {JSX.Element}
 */
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData);
      dispatch({ type: 'LOGIN', payload: user})
    }
  }, [])

  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      { children }
    </AuthContext.Provider>
  );
}
