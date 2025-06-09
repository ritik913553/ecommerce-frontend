import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const user = action.payload ? action.payload.user : null;
            state.user = user;
            if (user == null) {
                state.isAuth = false;
            } else {
                state.isAuth = true;
                state.error = null;
            }
        },
    },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
