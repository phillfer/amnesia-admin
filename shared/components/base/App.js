import 'normalize.css/normalize.css';

import React from 'react';
import Head from './Head';
import Router from './Router';
import Build from './Build';
import Validate from '../auth/validate/Validate';
import './App.scss';

const App = () => (
  <div>
    <Head />
    <Router />
    <Build />
    <Validate />
  </div>
);

export default App;
