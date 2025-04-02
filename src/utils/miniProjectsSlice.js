import {createSlice} from "@reduxjs/toolkit";

const miniProjectsSlice = createSlice({
    name: "miniProjectsSlice",
    initialState: {
        data:[]
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }

})
export const {setData} = miniProjectsSlice.actions;
export default miniProjectsSlice.reducer;