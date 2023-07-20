import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',

    initialState: {
        user: {}
    },

    reducer: {
        loggedUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('nc_user', JSON.stringify(action.payload));
        }
    }
});

export const { loggedUser } = userSlice.actions;
export default userSlice.reducer;