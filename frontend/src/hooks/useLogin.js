// @ts-check

import { useState } from "preact/hooks";
import useAuthContext from "./useAuthContext";

export default function useLogin() {
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    /**
   * @type {import("../context/AuthContext").AuthContextType}
   */
    const { dispatch } = useAuthContext()

    /**
     * @param {string} email 
     * @param {string} password 
     */
    async function login(email, password) {
        setIsLoading(true)
        setError('')

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        /**
         * @type {{email: string, error: string}}
         */
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
            
        }
    }

    return { login, isLoading, error }
}