import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactFire from "reactfire";
import ReactMixin from "react-mixin";
import { compose, withHandlers } from 'recompose'
import { browserHistory } from "react-router";

import Navigation from "./Navigation";
import Header from "./Header";

// Actions
import * as SettingsActions from "../../actions/SettingsActions";
import * as Auth0Actions from '../../actions/Auth0Actions';


const enhance = compose(
  withHandlers({
    onToggle: props => event => {
      const { settings, settingsActions } = props;
      const isDrawerOpened = !settings.isDrawerOpened;
      settingsActions.toggleDrawer({ isDrawerOpened });
    },
    onLogin: props => event => {
      const { auth0, auth0Actions } = props;
      auth0Actions.loginRequest();
    },
    onLogout: props => event => {
      const { auth0, auth0Actions } = props;
      auth0Actions.logout();
    },
    onProfile: props => event => {
      const { auth0, auth0Actions } = props;
      browserHistory.push('/profile');
    }

  })
)

ReactMixin(App.prototype, ReactFire);

function App({ children, onToggle, onLogin, onLogout, onProfile }) {
  let childComponent = React.Children.map(children, child => {
    return React.cloneElement(child);
  });

  return (
    <div className="app">
      <Header
        onToggle={onToggle}
        onLogin={onLogin}
        onLogout={onLogout}
        onProfile={onProfile}
      />
      <Navigation
        onToggle={onToggle}
      />
      {childComponent}

    </div>
  );
}

export default connect(
  ({ settings, auth0 }) => ({ settings, auth0 }),
  (dispatch) => ({
    settingsActions: bindActionCreators(SettingsActions, dispatch),
    auth0Actions: bindActionCreators(Auth0Actions, dispatch),
  })
)(
  enhance(({ children, onToggle, onLogin, onLogout, onProfile }) => App({ children, onToggle, onLogin, onLogout, onProfile }))
  );
