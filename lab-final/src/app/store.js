import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './features/dragonSlice';
import missionsReducer from './features/missionsSlice';

export const store = configureStore({
    reducer: {
        dragons: dragonsReducer,
        missions: missionsReducer,
    },
});
