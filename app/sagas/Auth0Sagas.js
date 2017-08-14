import Auth0Lock from 'auth0-lock';
import { call, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import { setStoredAuthState, removeStoredAuthState } from '../utils/auth0Utils';
import { browserHistory } from "react-router";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/Auth0';


import { loginFailure, loginSuccess } from '../actions/Auth0Actions';
import Auth0 from 'auth0-js'

import { config } from '../utils/config';
console.log(".......")

export function* loginRequestSaga() {

  const lock = new Auth0Lock(config.auth0.clientid, config.auth0.domain, { auth: { redirect: false } });

  const showLock = () =>
    new Promise((resolve, reject) => {
      lock.on('hide', () => reject('Lock closed'));

      lock.on('authenticated', (authResult) => {
        lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (!error) {
            const immutableProfile = Immutable.fromJS(profile);
            lock.hide();
            resolve({ profile: immutableProfile, idToken: authResult.idToken });
          }
        });
      });

      lock.on('unrecoverable_error', (error) => {
        console.log("LOGIN ERROR " + error)
        lock.hide();
        reject(error);
      });

      lock.show();
    });

  try {
    const { profile, idToken } = yield call(showLock);
    yield put(loginSuccess(profile, idToken));

  } catch (error) {
    yield put(loginFailure(error));
//    yield put(push('/'));
  }
}

export function* watchLoginRequest() {
  while (true) {
    yield take(LOGIN_REQUEST);
    yield call(loginRequestSaga);
  }
}

export function* watchLoginSuccess() {
  while (true) {
    const { profile, idToken } = yield take(LOGIN_SUCCESS);
      setStoredAuthState(profile, idToken);
  //    yield put(delegateRequest(idToken));
      browserHistory.push('/signup');

  }
}

export function* watchLoginFailure() {
  while (true) {
    yield take(LOGIN_FAILURE);

    removeStoredAuthState();
  }
}

export function* watchLogout() {
  while (true) {
    yield take(LOGOUT);

    removeStoredAuthState();
    //TODO react-router-redux fix this, its not wired up right
    //browserHistory.push('/Posts/');
  //  yield put(push('/posts'));
  }
}
