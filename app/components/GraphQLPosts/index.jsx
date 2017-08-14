import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as SettingsActions from "../../actions/SettingsActions";


import Posts from './GraphQLPosts'
import * as Auth0Actions from '../../actions/Auth0Actions';

const PostQuery = gql`query PostQuery {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`


export default compose(
  graphql(PostQuery),
  connect(
  ({ settings, auth0, apollo }) => ({ settings, auth0, apollo }),
  (dispatch) => ({
    settingsActions: bindActionCreators(SettingsActions, dispatch),
    auth0Actions: bindActionCreators(Auth0Actions, dispatch),
  }),)
)(Posts);
