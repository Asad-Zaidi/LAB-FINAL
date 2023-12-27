import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    return response.data;
});

export const dragonsSlice = createSlice({
    name: 'dragons',
    initialState: {
        dragons: [],
        selectedDragon: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        selectDragon: (state, action) => {
            state.selectedDragon = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDragons.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDragons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dragons = action.payload;
            })
            .addCase(fetchDragons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { selectDragon } = dragonsSlice.actions;

export const selectAllDragons = (state) => state.dragons.dragons;
export const selectSelectedDragon = (state) => state.dragons.selectedDragon;

export default dragonsSlice.reducer;
