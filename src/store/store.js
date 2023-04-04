import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from '../Reducers/recordsReducer';


export default configureStore({
    reducer: {
      records: recordsReducer
    }
})