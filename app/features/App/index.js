/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';
import HomePage from 'features/HomePage/Loadable';
import NotFoundPage from 'features/NotFoundPage/Loadable';
import ToDo from '../ToDo';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todo" component={ToDo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default hot(App);
