/*
 * ToDo Slice
 *
 */

import { createNextState, createSlice } from '@reduxjs/toolkit';

export const initialState = { data: [] };

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    submitText(state) {
      state.creatingUser = true;
      state.creatingUserError = false;
    },
    submitTextSuccess(state) {
      state.creatingUser = false;
      state.creatingUserError = false;
      state.creatingUserSuccess = true;
    },
    submitTextError(state, action) {
      state.creatingUser = false;
      state.creatingUserError = action.payload.error;
      state.creatingUserSuccess = false;
    },
    requestingData(state) {
      state.requestingData = true;
      state.dataError = false;
    },
    loadData(state, action) {
      state.requestingData = false;
      state.dataError = false;
      state.data = action.payload.data;
    },
    errorData(state, action) {
      state.requestingData = false;
      state.dataError = action.payload.error;
    },
  },
});

export const {
  defaultAction,
  submitText,
  requestingData,
  loadData,
  errorData,
  submitTextSuccess,
  submitTextError,
} = toDoSlice.actions;

export const { reducer } = toDoSlice;
