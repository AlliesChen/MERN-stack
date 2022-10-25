// @ts-check

import { useState } from "preact/hooks";
import useAuthContext from "./useAuthContext";

export default function useSignup() {
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
    async function signup(email, password) {
        setIsLoading(true)
        setError('')

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        /**
         * @type {{email: string, token: string, error: string}}
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

    return { signup, isLoading, error }
}