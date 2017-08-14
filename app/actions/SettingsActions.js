import { types } from "../constants/ActionTypes";

export const toggleDialog = payload => ({ type: types.TOGGLE_DIALOG, payload });

export const toggleDialogSucceeded = payload => ({ type: types.TOGGLE_DIALOG_SUCCEEDED, payload });

export const toggleDrawer = payload => ({ type: types.TOGGLE_DRAWER, payload });

export const toggleDrawerSucceeded = payload => ({ type: types.TOGGLE_DRAWER_SUCCEEDED, payload });
