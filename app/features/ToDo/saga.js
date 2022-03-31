import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  submitText,
  requestingData,
  loadData,
  errorData,
  submitTextSuccess,
  submitTextError,
} from './slice';

// Individual exports for testing
export function* submitTextSaga(action) {
  const { emailValue, nameValue } = action.payload;
  try {
    yield call(axios.post, 'http://localhost:9000/todo-apps', {
      email: emailValue,
      name: nameValue,
    });
    yield put(submitTextSuccess());
  } catch (err) {
    yield put(submitTextError());
  }
}

export function* requestingDataSaga() {
  try {
    const emails = yield call(axios.get, 'http://localhost:9000/todo-apps');
    yield put(loadData({ data: emails.data }));
  } catch (error) {
    yield put(errorData({ error }));
  }
}
// See example in fes/ReposManager/saga.js in the react-boilerplate sample app
export default function* todoSaga() {
  yield takeLatest(submitText.type, submitTextSaga);
  yield takeLatest(requestingData.type, requestingDataSaga);
}
// See example in fes/ReposManager/saga.js in the react-boilerplate sample app
