import { route } from 'preact-router';

/**
 * @param {{path: string, to: string}} param0 - React component's props
 */
export function Redirect({path, to}) {
    if (document.location.pathname === path) {
        route(to, true)
    }

    return null
}