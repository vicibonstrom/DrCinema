import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

// Typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;