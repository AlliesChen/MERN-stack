// @ts-check

import { useState } from "preact/hooks"
import useLogin from "../hooks/useLogin"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    /**
     * @param {SubmitEvent} e 
     */
    async function handleSubmit(e) {
        e.preventDefault()
        await login(email, password);
    }
    return (
        <form class="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
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

            <button disabled={isLoading}>Log in</button>
            {error && <div class="error">{ error }</div>}
        </form>
    )
}