import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import clubSlice from './clubSlice';

const store = configureStore({
    reducer: {
        userStore: userSlice,
        clubStore: clubSlice,
    }
});

export default store;