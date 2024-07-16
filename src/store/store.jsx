import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/counterSlice'

export const store = configureStore({
  reducer: {counter: reducer},
})

export default store;