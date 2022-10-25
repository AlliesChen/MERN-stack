// @ts-check

import useAuthContext from './useAuthContext'

export default function useLogout() {
    /**
   * @type {import("../context/AuthContext").AuthContextType}
   */
    const { dispatch } = useAuthContext()
    
    function logout() {
        // remove user from storage
        localStorage.removeItem('user')
        
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}