import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from '../Reducers/recordsReducer';
import filtersReducer from '../Reducers/filtersReducer';
import authReducer from '../Reducers/authReducer';


export default configureStore({
    reducer: {
      records: recordsReducer,
      filters: filtersReducer,
      auth: authReducer
    }
})