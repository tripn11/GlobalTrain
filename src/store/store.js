import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from '../Reducers/recordsReducer';
import filtersReducer from '../Reducers/filtersReducer';


export default configureStore({
    reducer: {
      records: recordsReducer,
      filters: filtersReducer
    }
})