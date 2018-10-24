import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import './Admin.scss';

import Page from '../common/Page';

export default class Admin extends PureComponent {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Amnesia - Gerenciamento de Decks</title>
        </Helmet>

        <div styleName="admin">
          <section>
            <h2>Desck do Round 1</h2>
          </section>
          <section>
            <h2>Desck do Round 2</h2>
          </section>
          <section>
            <h2>Desck do Round 3</h2>
          </section>
        </div>
      </Page>
    );
  }
}
