import 'normalize.css/normalize.css';

import React from 'react';
import firebase from 'firebase';
import './App.scss';

import Head from './Head';
import Router from './Router';
import Validate from '../auth/validate/Validate';
import Header from '../header/Header';

const config = {
  apiKey: 'AIzaSyAhsp_6rizgHRtUAOALh5wqjuF04SI5RQQ',
  authDomain: 'amnsesia-3a69b.firebaseapp.com',
  databaseURL: 'https://amnsesia-3a69b.firebaseio.com',
  projectId: 'amnsesia-3a69b',
  storageBucket: 'amnsesia-3a69b.appspot.com',
  messagingSenderId: '893162620061',
};

firebase.initializeApp(config);

const App = () => (
  <div>
    <Head />
    <Header />
    <Router />
    <Validate />
  </div>
);

export default App;
