import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('cards/ changeFilter', event => {
  return {
    payload: event.target.value,
  };
});

export const changeFilterTarget = createAction('cards/ changeFilterTarget', event => {
  return {
    payload: event.target.value,
  };
});
