import {createSlice} from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        data:[]
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})
export const {setData} = projectsSlice.actions;
export default projectsSlice.reducer;