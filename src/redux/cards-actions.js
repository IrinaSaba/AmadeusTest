import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('cards/ changeFilter', event => {
  return {
    payload: event.target.value,
  };
});

