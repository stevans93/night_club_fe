import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',

    initialState: {
        user: {}
    },

    reducers: {
        loggedUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('nc_user', JSON.stringify(action.payload));
        },
        restoreUser: (state, action) => {
            state.user = action.payload;
        },
        logOutUser: (state, action) => {
            state.user = {};
            localStorage.removeItem("nc_user");
            localStorage.removeItem('nc_token');
        },
    }
});

export const { loggedUser, restoreUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;