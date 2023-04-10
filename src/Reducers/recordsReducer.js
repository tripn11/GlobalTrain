import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        addItem (state, action) {
            state.push(action.payload)
        },

        removeItem (state, action) {
            const index = state.findIndex((record) => record.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        editItem (state, action) {
            state.map((item,index)=>{
                if(item.id === action.payload.id){
                  state.splice(index, 1, action.payload)
                }
              })
        },

        setRecords (state, action) {
            action.payload.map((record) => {
                state.push(record)
            })
        }
    }
})

export const { addItem, removeItem, editItem, setRecords } = recordsSlice.actions;

export default recordsSlice.reducer;