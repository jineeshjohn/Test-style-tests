import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main';
import NotFound from './NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
