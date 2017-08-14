import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose, withHandlers } from 'recompose'
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import TopBar from "./TopBar";

@connect(
  ({ settings, auth0 }) => ({ settings, auth0 }),
  (dispatch) => ({
  })
)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMenuItemClick = (event, dialogType, needsReload) => {
    const { settings, settingsActions  } = this.props;

    settingsActions.toggleDialog({ isDialogOpened, dialogType });
  }

  handleIconMenuItemClick = (event) => {
    const { auth0, auth0Actions  } = this.props;

      auth0Actions.loginRequest();
  }


  render() {
    return (
      <TopBar
        {...this.props}
        handleMenuItemClick={this.handleMenuItemClick}
        handleIconMenuItemClick={this.handleIconMenuItemClick}
      />
    );
  }
}
