// @ts-check

import { Link } from 'preact-router/match';
import useLogout from '../hooks/useLogout';
import useAuthContext from '../hooks/useAuthContext';

export const Navbar = () => {
    const { logout } = useLogout();
    /**
     * @type {import("../context/AuthContext").AuthContextType;}
     */
    const { state } = useAuthContext();

    function handleClick() {
        logout()
    }
    return (
        <header>
            <div class="container">
                <Link href="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    { state.user && (
                        <div>
                            <span>{state.user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    { !state.user && (
                        <div>
                            <Link href="/login">Login</Link>
                            <Link href="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}