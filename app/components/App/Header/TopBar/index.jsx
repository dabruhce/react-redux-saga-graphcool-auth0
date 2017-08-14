import React from "react";
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
import RefreshButton from 'material-ui/svg-icons/navigation/refresh';

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import AppBarMenu from 'material-ui/svg-icons/navigation/menu';

export default function TopBar({
  handleMenuItemClick,
  onToggle,
  onLogin,
  onLogout,
  onProfile,
  ...props
}) {


  return (
    <AppBar
      showMenuIconButton={true}
      title="Title"
      iconElementLeft={<IconButton onClick={onToggle}><AppBarMenu /></IconButton>}
      iconElementRight={!props.auth0.appProfile ? <FlatButton onClick={onLogin} label="Login" /> :
                                                  <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem primaryText="Refresh" rightIcon={<RefreshButton />}/>
      <MenuItem primaryText="Profile"  onClick={onProfile} />
      <MenuItem primaryText="Sign out" onClick={onLogout} rightIcon={props.auth0.appProfile ? <Avatar src={props.auth0.appProfile.picture} /> : ""}  />
      </IconMenu>}
    />
  );
}
