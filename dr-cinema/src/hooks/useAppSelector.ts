import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;