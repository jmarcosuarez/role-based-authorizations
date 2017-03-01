import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Stream from './components/Stream';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/stream" component={Stream} />
  </Route>
);
