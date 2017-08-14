import { connect } from 'react-redux';
import CreateUser from './CreateUser';
import { bindActionCreators } from "redux";
import * as SettingsActions from "../../actions/SettingsActions";

export default connect(
//  mapStateToProps,
  ({ settings, auth0, apollo }) => ({ settings, auth0, apollo }),
  (dispatch) => ({
    settingsActions: bindActionCreators(SettingsActions, dispatch)
  }),
)(CreateUser);
