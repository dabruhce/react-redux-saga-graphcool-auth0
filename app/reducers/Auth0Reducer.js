import { Map } from 'immutable';
import * as AUTH0 from '../constants/Auth0';
import { getStoredAuthState } from '../utils/auth0Utils';
import Immutable from 'immutable';
import { fromJS } from "immutable";

import { initialState } from "./";
function normalizeSocialProfileForApp(profile) {

  //TODO this was a simple test to normalize the relationships of names/pictures
  //     can be done other ways and/or cleaner

  let localProfile = JSON.parse(JSON.stringify(profile));
  //let identity = profile2.identities[0];
  let data = localProfile.identities;
  let stringify = JSON.stringify(data);
  let content = JSON.parse(stringify);
  let normalizedProfile = {}


  if(content[0].connection === 'twitter') {
    normalizedProfile = { user: localProfile.screen_name, picture: localProfile.picture }
    return normalizedProfile;
  }
  if(content[0].connection  === 'google') {
    //TODO setup google login in auth0
    normalizedProfile = { user: localProfile.screen_name, picture: localProfile.picture }
    return normalizedProfile;
  }
  if(content[0].connection  === 'facebook') {
    //TODO setup fb login in auth0
    normalizedProfile = { user: localProfile.screen_name, picture: localProfile.picture }
    return normalizedProfile;
  }
  if(content[0].connection  === 'twitch') {
    normalizedProfile = { user: localProfile.display_name, picture: localProfile.picture }
    return normalizedProfile;
  }

}

export default function reducer(state = initialState.auth0, action) {
  switch (action.type) {
    case AUTH0.LOGIN_REQUEST:
      return Object.assign({}, { isLoggingIn: true });
    case AUTH0.LOGIN_SUCCESS:
      let profile = JSON.stringify(action.profile);
      return Object.assign({}, { isLoggingIn: false,
                                 idToken: action.idToken,
                                 profile: JSON.parse(profile),
                                 appProfile: normalizeSocialProfileForApp(action.profile) });
    case AUTH0.LOGIN_FAILURE:
      return Object.assign({}, { isLoggingIn: false,
                                 idToken: action.idToken,
                                 profile: action.profile,
                                 error: action.error });
    case AUTH0.LOGOUT:
      return initialState.auth0;
    default:
      return state;
  }
}
