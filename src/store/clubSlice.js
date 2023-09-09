import { createSlice } from '@reduxjs/toolkit';

const clubSlice = createSlice({
    name: 'club',

    initialState: {
        clubId: ''
    },

    reducers: {
        getClubId: (state, action) => {
            state.clubId = action.payload;
            localStorage.setItem('clubId', JSON.stringify(action.payload));
        },
    }
});

export const { getClubId } = clubSlice.actions;
export default clubSlice.reducer;