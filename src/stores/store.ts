import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counter from './features/counter';

const reducers = combineReducers({
  // add reducers here
  counter,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
