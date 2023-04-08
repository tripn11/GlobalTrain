import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'


const initialState = {
    searchedId:'',
    adminSearchedId:'',
    status:'all status',
    sort:'',
    date: {
        startDate: null,
        endDate: null
    }
}

const recordsSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchedId (state, action) {
            return {...state, searchedId:action.payload}
        },

        adminSearchedId (state, action) {
            return {...state, adminSearchedId:action.payload}
        },

        status (state, action) {
            return {...state, status:action.payload}
        },

        date (state, action) {
            return {...state, date:{...action.payload}}
        },

        sort (state, action) {
            return {...state,sort:action.payload}
        }
    }
})

export const { searchedId, adminSearchedId, status, date, sort } = recordsSlice.actions;

export default recordsSlice.reducer;