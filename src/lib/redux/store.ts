/* Core */
import { configureStore, type ThunkAction, type Action } from "@reduxjs/toolkit";
import { 
  useSelector as useReduxSelector, 
  useDispatch as useReduxDispatch, 
  type TypedUseSelectorHook,
} from "react-redux";
import { createWrapper } from "next-redux-wrapper";

/* Instruments */
import { reducer } from './rootReducer';
import { middleware } from './middleware';

export const reduxStore = () => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  }
});

/* Types */
export type ReduxStore = ReturnType<typeof reduxStore>;
export type ReduxState = ReturnType<ReduxStore['getState']>;
export type ReduxDispatch = ReduxStore['dispatch'];
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export const wrapper = createWrapper<ReduxStore>(reduxStore);