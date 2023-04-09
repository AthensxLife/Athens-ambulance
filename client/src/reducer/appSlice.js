import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page : 'GetStarted',
    optionBill : ''
}

export const app = createSlice({
    name : 'app',
    initialState,
    reducers: {
        setpage : (state, action) => {
            state.page = action.payload
        },
        setoptionBill : (state, action) => {
            state.optionBill = action.payload
        },
    }
});

export const { setpage, setoptionBill } = app.actions;
export default app.reducer;