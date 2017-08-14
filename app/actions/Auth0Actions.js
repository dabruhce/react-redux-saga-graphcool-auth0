import * as AUTH0 from '../constants/Auth0';

export const getError = state => state.auth.get('error');

export const getIdToken = state => state.auth.get('idToken');

export const getIsLoggingIn = state => state.auth.get('isLoggingIn');

export const getProfile = state => state.auth.get('profile');


export const loginRequest = () => (
  {
    type: AUTH0.LOGIN_REQUEST,
  }
);

export const loginSuccess = (profile, idToken) => (
  {
    type: AUTH0.LOGIN_SUCCESS,
    profile,
    idToken,
  }
);

export const loginFailure = error => (
  {
    type: AUTH0.LOGIN_FAILURE,
    error,
  }
);

export const logout = () => (
  {
    type: AUTH0.LOGOUT,
  }
);
