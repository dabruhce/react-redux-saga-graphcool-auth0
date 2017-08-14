import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Root } from "./components/Root.jsx";
console.log('aaaaaaaaaa');
injectTapEventPlugin();

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
