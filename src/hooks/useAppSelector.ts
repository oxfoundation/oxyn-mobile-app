import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../store/configuration';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
