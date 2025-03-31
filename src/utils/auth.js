import {createSlice} from "@reduxjs/toolkit";

const auth=createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})
export const {setUser, clearUser} = auth.actions;
export default auth.reducer;