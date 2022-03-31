import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

/**
 * Direct selector to the toDo state domain
 */

const selectToDoDomain = state => state.toDo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ToDo
 */

const selectToDo = createSelector([selectToDoDomain], substate => substate);

const selectToDoNames = createSelector([selectToDoDomain], substate =>
  substate.data.map(item => ({ name: item.name, id: item.id })),
);
const selectToDoEmails = createSelector([selectToDoDomain], substate =>
  substate.data.map(item => ({ email: item.email, id: item.id })),
);

export default selectToDo;
export { selectToDoDomain, selectToDoEmails, selectToDoNames };
