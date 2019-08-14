import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShuttleShareApp from '../components/ShuttleShareApp';
import EditShuttlePage from '../components/EditShuttlePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ShuttleShareApp} exact={true} />
        <Route path="/edit/:id" component={EditShuttlePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;