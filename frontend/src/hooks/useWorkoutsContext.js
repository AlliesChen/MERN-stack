// @ts-check

import { useContext } from 'preact/hooks';
import { WorkoutsContext } from '../context/WorkoutsContext';

export default function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider');
  }
  return context;
}
