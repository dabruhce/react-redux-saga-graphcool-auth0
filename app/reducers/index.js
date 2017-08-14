import { combineReducers } from "redux";
import settings from "./SettingsReducer";
import auth0 from './Auth0Reducer';


export const initialState = {
  settings: {
    isDrawerOpened: false,
    isDialogOpened: false,
  },
  auth0: {
    isLoggingIn: false,
    idToken: null,
    profile: null,
    error: null,
    delegationResult: null,
    appProfile: null
  }
}
