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
    switch (score) {
      case score < 200:
        return 'Memória Lixo';
      case score < 500:
        return 'Memória Medíocre';
      case score < 1000:
        return 'Memória Padrão';
      case score < 1500:
        return 'Memória Bronze';
      case score < 2000:
        return 'Memória Prata';
      case score < 3000:
        return 'Memória Gold';
      default:
        return 'Memória Platina';
    }
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
