import {createSlice} from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        data:[],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})
export  const {setData} =portfolioSlice.actions;
export default portfolioSlice.reducer;