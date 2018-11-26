import React from 'react';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import ScrollToTop from './ScrollToTop';
import PrivateRoute from '../auth/base/Private.route';
import NotAuthRoute from '../auth/base/NotAuth.route';
import * as routes from '../../constants/routes';

import SignIn from '../auth/signin/SignIn.container';
import Register from '../auth/register/Register.container';
import Decks from '../decks/Decks';
import Ranking from '../ranking/Ranking';
import NotFound from '../errors/NotFound.async';

function Router() {
  return (
    <ScrollToTop>
      <Switch>
        <NotAuthRoute path={routes.REGISTER} component={Register} />
        <Route path={routes.SIGN_IN} component={SignIn} />
        <PrivateRoute path={routes.DECKS} component={Decks} />
        <PrivateRoute path={routes.RANKING} component={Ranking} />
        <Redirect from={routes.ADMIN} to={routes.DECKS} />
        <Redirect from={routes.HOME} to={routes.SIGN_IN} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  );
}

export default Router;
