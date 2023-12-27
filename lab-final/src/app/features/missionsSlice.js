import { createSlice } from '@reduxjs/toolkit';

export const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
    },
    reducers: {
        setMissions: (state, action) => {
            state.missions = action.payload;
        },
    },
});

export const { setMissions } = missionsSlice.actions;

export const selectAllMissions = (state) => state.missions.missions;

export default missionsSlice.reducer;
