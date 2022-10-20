// @ts-check

import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "preact/hooks";

export default function useWorkoutsContext() {

    const context = useContext(WorkoutsContext)
    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context
}