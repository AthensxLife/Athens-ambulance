import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Mainmenu : false,
    page : 'GetStarted',
    toggleHelp : true,
    optionBill : '',
    ResourceName : 'lok-ambulance'
}

export const app = createSlice({
    name : 'app',
    initialState,
    reducers: {
        setMainmenu : (state, action) => {
            state.Mainmenu = action.payload
        },
        setpage : (state, action) => {
            state.page = action.payload
        },
        settoggleHelp : (state, action) => {
            state.toggleHelp = action.payload
        },
        setoptionBill : (state, action) => {
            state.optionBill = action.payload
        },
        setResourceName : (state, action) => {
            state.ResourceName = action.payload
        },
    }
});

export const { setpage, setoptionBill, settoggleHelp, setMainmenu, setResourceName } = app.actions;
export default app.reducer;