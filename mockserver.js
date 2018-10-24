/* eslint-disable no-console */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { log } from './shared/utils/logging';

const PORT = 3000;

// Create our express based server.
const app = express();

// Don't expose any software information to potential hackers.
app.disable('x-powered-by');

// Gzip compress the responses.
app.use(compression());

app.use(cors());

app.use(bodyParser.json());

// For logging
app.get('*', (req, res, next) => {
  log({
    title: 'Request',
    level: 'special',
    message: `Proxy received for "${req.url}"`,
  });
  next();
});

app.get('/posts/:id', (req, res) => {
  const posts = [
    { id: 0, title: 'Testing ok', text: 'lets sing!' },
    { id: 1, title: 'A beautiful post', text: 'lets dance!' },
  ];
  res.status(200).send(JSON.stringify(posts[req.params.id - 1]));
});

const user = { name: 'Robert', id: '1', email: 'test@email.com' };

app.get('/auth/validate_token', (req, res) => {
  res.status(200).send(JSON.stringify({ data: user }));
});

app.post('/auth/sign_in', (req, res) => {
  if (req.body.password === '12341234')
    return res.status(200).send(JSON.stringify({ data: user }));
  return res
    .status(401)
    .send(JSON.stringify({ errors: ['invalid credentials'] }));
});

// Create an http listener for our express app.
app.listen(PORT, () =>
  log({
    level: 'special',
    message: `
      Proxy server is now listening on Port ${PORT}
    `,
  }),
);
