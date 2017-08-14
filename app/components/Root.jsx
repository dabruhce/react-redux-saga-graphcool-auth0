import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo'
import { createStore, applyMiddleware } from "redux";
import { initialState } from "../reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../sagas";
import { createLogger } from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
import { combineReducers } from "redux";
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { connect } from "react-redux";
import settings from "../reducers/SettingsReducer";
import auth0 from '../reducers/Auth0Reducer';
//TODO Read from properties

import { routerReducer } from 'react-router-redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router';
const appRouterMiddleware = routerMiddleware(browserHistory)
import { config } from '../utils/config';

console.log(config);
console.log("xxxxx");
  const networkInterface = createNetworkInterface({
    uri: config.graphcool.uri
  })

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      if (localStorage.getItem('auth0IdToken')) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`
      }
      next()
    },
  }])

  const apolloClient = new ApolloClient({networkInterface});
  const apolloMiddleware = apolloClient.middleware();

import { compose } from 'redux';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    logger,
    sagaMiddleware,
    appRouterMiddleware,
    apolloMiddleware,
    reduxImmutableStateInvariant(),)
);

  const rootReducer = combineReducers({
    settings,
    auth0,
    apollo: apolloClient.reducer(),
    routing: routerReducer,
  });

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
    );

  sagaMiddleware.run(rootSaga);


import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from "./App";
import Home from "./Home";
import Posts from "./GraphQLPosts";
//import Reports from "./Reports";
import CreatePost from "./GraphQLCreatePost";
import Profile from "./Profile";
import CreateUser from './GraphCool'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

//Routes
export const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Posts" component={Posts} />
      <Route path="/CreatePost" component={CreatePost} />
      <Route path='/signup' component={CreateUser} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
);


export const Root = () => (
    <ApolloProvider store={store} client={apolloClient}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </ApolloProvider>
);
