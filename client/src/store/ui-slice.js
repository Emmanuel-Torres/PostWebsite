import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loggedIn: false,
        darkMode: false
    },
    reducers: {
        toggleDarkMode(state, action) {
            state.darkMode = !state.darkMode;
        },
        toggleLoggedIn(state, action) {
            state.loggedIn = !state.loggedIn;
        }
    }
});

export const { toggleDarkMode, toggleLoggedIn } = uiSlice.actions;
export default uiSlice;