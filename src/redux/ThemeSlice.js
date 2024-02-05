import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "light",
};

const ThemeSlice = createSlice({
    initialState,
    name : "theme",
    reducers:{
        changeTheme:(state,action)=>{
            return{
                ...state,
                theme: action.payload == true ? "light":"dark",
            };
        },
    },
});
export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;