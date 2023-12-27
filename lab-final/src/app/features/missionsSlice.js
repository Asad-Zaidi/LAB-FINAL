import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/missions');
    return response.data;
});

export const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
        selectedMission: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        selectMission: (state, action) => {
            state.selectedMission = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMissions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMissions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.missions = action.payload;
            })
            .addCase(fetchMissions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { selectMission } = missionsSlice.actions;

export const selectAllMissions = (state) => state.missions.missions;
export const selectSelectedMission = (state) => state.missions.selectedMission;

export default missionsSlice.reducer;
