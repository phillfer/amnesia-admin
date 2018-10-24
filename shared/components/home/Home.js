import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import config from '../../../config';
import Page from '../common/Page';

export default class Home extends PureComponent {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <h2>{config('welcomeMessage')}</h2>

        <p>
          This starter kit contains all the build tooling and configuration you
          need to kick off your next universal React project, whilst containing
          a minimal project set up allowing you to make your own architecture
          decisions (Redux/Mobx etc).
        </p>
      </Page>
    );
  }
}
