// @ts-check

import { useState } from "preact/hooks"
import useSignup from "../hooks/useSignup"

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()
    /**
     * @param {SubmitEvent} e 
     */
    async function handleSubmit(e) {
        e.preventDefault()
        await signup(email, password)
    }
    return (
        <form class="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign up</button>
            {error && <div class="error">{ error }</div>}
        </form>
    )
}