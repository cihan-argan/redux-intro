import { configureStore } from '@reduxjs/toolkit';
import reducers from './index';

export default configureStore({

  reducer : {
    reducers

  }
})

/*
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from ''./index';'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

*/