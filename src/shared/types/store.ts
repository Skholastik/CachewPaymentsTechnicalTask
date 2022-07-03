import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { Store } from '@/app/store';

export type IAppStore = typeof Store;
export type IAppDispatch = IAppStore['dispatch'];
export type IAppState = ReturnType<IAppStore['getState']>;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
