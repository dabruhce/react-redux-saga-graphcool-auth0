import { put, takeLatest } from 'redux-saga/effects';

function* toggleDialogHandler(action) {
  let { payload } = action;
  yield put({type: "TOGGLE_DIALOG_SUCCEEDED", payload });
}

export function* toggleDialogRequest() {
  yield takeLatest('TOGGLE_DIALOG', toggleDialogHandler);
}

function* toggleDrawerHandler(action) {
  let { payload } = action;
  yield put({type: "TOGGLE_DRAWER_SUCCEEDED", payload });
}

export function* toggleDrawerRequest() {
  yield takeLatest('TOGGLE_DRAWER', toggleDrawerHandler);
}