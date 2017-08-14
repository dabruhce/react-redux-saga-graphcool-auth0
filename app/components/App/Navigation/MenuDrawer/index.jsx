import React from "react";
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

import { MenuLinks } from "./constants";
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBarMenu from 'material-ui/svg-icons/navigation/menu';
import RefreshButton from 'material-ui/svg-icons/navigation/refresh';
import Avatar from 'material-ui/Avatar';

const renderMenu = ({ navigateTo }) => {
  return MenuLinks.map((link, index) => {
    return (
      <MenuItem
        key={index}
        onClick={() => navigateTo(link.href)}
      >
        {link.name}
      </MenuItem>
    );
  });
};

export default function MenuDrawer({
  navigateTo,
  onToggle,
  settings,
  auth0,
  ...props
}) {

  return (
    <Drawer
      open={settings.isDrawerOpened}
      docked={false}
      onRequestChange={onToggle}
      width={370}>

      <AppBar
        title="Title"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={onToggle}

       />

      {renderMenu({ navigateTo })}

    </Drawer>
  );
};
