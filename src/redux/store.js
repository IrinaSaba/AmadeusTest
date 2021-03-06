import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cards-reducer';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
