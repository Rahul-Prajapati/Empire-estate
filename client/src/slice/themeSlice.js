import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (store) => {
            store.theme = store.theme === 'light' ? 'dark' : 'light';
        },
        }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;