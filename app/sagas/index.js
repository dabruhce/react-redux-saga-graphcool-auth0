import { fork } from 'redux-saga/effects';
import { toggleDialogRequest, toggleDrawerRequest } from "./SettingsSaga";
import { watchLoginRequest, watchLoginSuccess, watchLoginFailure, watchLogout  } from './Auth0Sagas';



export function* rootSaga() {
  yield [
    fork(toggleDialogRequest),
    fork(toggleDrawerRequest),
    fork(watchLoginRequest),
    fork(watchLoginSuccess),
    fork(watchLoginFailure),
    fork(watchLogout),
  //  fork(watchDelegateSuccess),
    ]
}
