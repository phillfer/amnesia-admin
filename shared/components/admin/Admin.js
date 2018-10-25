import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import './Admin.scss';
import firebase from 'firebase';
import 'firebase/storage';
import update from 'immutability-helper';

import Page from '../common/Page';

export default class Admin extends PureComponent {
  state = {
    deck0: [],
    deck1: [],
    deck2: [],
    loading: false,
  };

  decks = ['deck0', 'deck1', 'deck2'];

  componentDidMount() {
    firebase
      .firestore()
      .collection('decks')
      .get()
      .then(docs => {
        const decks = {};
        docs.forEach(doc => (decks[doc.id] = doc.data().cards));
        console.log('MEU AMIGO', decks);
        this.setState({ ...decks });
      });
  }

  onFileChange = (event, deckKey, cardIndex) => {
    this.setState({ loading: true });
    const file = event.target.files[0];
    console.log('EVENT ', file, deckKey, cardIndex);
    const storageRef = firebase.storage().ref();
    storageRef
      .child(`${deckKey}/card${cardIndex}.png`)
      .put(file)
      .then(obj => {
        obj.ref
          .getDownloadURL()
          .then(url => this.updateDeck(url, deckKey, cardIndex));
      });
  };

  updateDeck = (url, deckKey, cardIndex) => {
    const deck = this.state[deckKey];
    const card = deck[cardIndex];

    const updateCard = { ...card, img: url };
    const updateDeck = update(deck, {
      [cardIndex]: { $set: updateCard },
    });

    firebase
      .firestore()
      .collection('decks')
      .doc(deckKey)
      .set({
        cards: updateDeck,
      });
    this.setState({ [deckKey]: updateDeck, loading: false });
  };

  render() {
    console.log('STATE', this.state);
    return (
      <Page>
        <Helmet>
          <title>Amnesia - Gerenciamento de Decks</title>
        </Helmet>

        {this.state.loading && (
          <p style={{ color: 'white' }}>ATUALIZANDO IMAGEM... </p>
        )}
        <div styleName="admin">
          {this.decks.map((deckKey, deckIndex) => {
            const deck = this.state[deckKey];
            return (
              <section key={deckKey}>
                <h2>Deck do Round {deckIndex + 1}</h2>
                {deck.map((card, cardIndex) => (
                  <div key={card.id}>
                    <input
                      type="file"
                      accept="image/png"
                      onChange={event =>
                        this.onFileChange(event, deckKey, cardIndex)
                      }
                    />
                    <img alt="Carta do baralho" src={card.img} />
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </Page>
    );
  }
}
