import React, { Component } from 'react';
import Helmet from 'react-helmet';
import firebase from 'firebase';
import 'firebase/storage';
import update from 'immutability-helper';
import './Ranking.scss';

import Page from '../common/Page';

const iconClose = require('../../assets/images/icons/icon-close-light.svg');

export default class Ranking extends Component {
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('decks')
    //   .get()
    //   .then(docs => {
    //     const decks = {};
    //     docs.forEach(doc => (decks[doc.id] = doc.data().cards));
    //     this.setState({ ...decks });
    //   });
  }

  render() {
    return (
      <Page>
        <Helmet>
          <title>Amnesia - Ranking geral</title>
        </Helmet>

        <div styleName="ranking">
          <span />
        </div>
      </Page>
    );
  }
}
