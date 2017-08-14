import React, { Component } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from 'react-router-redux';
import MenuDrawer from "./MenuDrawer";


// Actions
import * as SettingsActions from "../../../actions/SettingsActions";

@connect(
  ({ settings }) => ({ settings }),
  (dispatch) => ({
    settingsActions: bindActionCreators(SettingsActions, dispatch)
  })
)
export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  navigateTo = (location) => {
    const { settings, settingsActions } = this.props;

    settingsActions.toggleDrawer({ isDrawerOpened: false });
    browserHistory.push(location);
  }

  render() {
    return (
      <MenuDrawer
        {...this.props}
        navigateTo={this.navigateTo}
      />
    );
  }
}
