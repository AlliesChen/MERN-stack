// @ts-check

import { Link } from 'preact-router/match';

export const Navbar = () => {
    return (
        <header>
            <div class="container">
                <Link href="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}