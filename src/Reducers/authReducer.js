import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading (state, action) {
            return {loading:action.payload}
        }
    }
})


export const { setLoading } = authSlice.actions;

export default authSlice.reducer;