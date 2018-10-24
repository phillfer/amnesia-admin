import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import config from '../../../config';
import Page from '../common/Page';

export default class Admin extends PureComponent {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Admin</title>
        </Helmet>

        <h2>{config('welcomeMessage')}</h2>

        <p>ON ADMIN!!!</p>
      </Page>
    );
  }
}
