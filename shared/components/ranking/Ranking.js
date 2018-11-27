import React, { Component } from 'react';
import Helmet from 'react-helmet';
import firebase from 'firebase';
import 'firebase/storage';
import './Ranking.scss';

import Page from '../common/Page';

export default class Ranking extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .orderBy('score', 'desc')
      .get()
      .then(docs => {
        const users = [];
        docs.forEach(doc => users.push(doc.data()));
        this.setState({ users });
      })
      .catch(err => {
        console.log('ERROR GETTING RANKING: ', err);
      });
  }

  getScoreLabel = score => {
    if (!score) return '';
    if (score < 200) return 'Memória Lixo';
    if (score < 500) return 'Memória Medíocre';
    if (score < 1000) return 'Memória Padrão';
    if (score < 1500) return 'Memória Bronze';
    if (score < 2000) return 'Memória Prata';
    if (score < 3000) return 'Memória Gold';
    return 'Memória Platina';
  };

  render() {
    const { users } = this.state;

    return (
      <Page>
        <Helmet>
          <title>Amnesia - Ranking geral</title>
        </Helmet>

        <div styleName="ranking">
          {users &&
            users.length > 0 &&
            users.map(user => (
              <div key={user.uid} styleName="user">
                <div>
                  <h3>{user.name}</h3>
                </div>
                <div>
                  <span>{this.getScoreLabel(user.score)}</span>
                  <p>{user.score} pontos</p>
                </div>
              </div>
            ))}
        </div>
      </Page>
    );
  }
}
