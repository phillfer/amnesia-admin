import React from 'react';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import PrivateRoute from '../auth/base/Private.route';
import NotAuthRoute from '../auth/base/NotAuth.route';
import * as routes from '../../constants/routes';

import SignIn from '../auth/signin/SignIn.container';
import Register from '../auth/register/Register.container';
import Admin from '../admin/Admin';
import NotFound from '../errors/NotFound.async';

function Router() {
  return (
    <Switch>
      <NotAuthRoute path={routes.REGISTER} component={Register} />
      <NotAuthRoute path={routes.SIGN_IN} component={SignIn} />
      <Route path={routes.ADMIN} component={Admin} />
      <Redirect from={routes.HOME} to={routes.ADMIN} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
