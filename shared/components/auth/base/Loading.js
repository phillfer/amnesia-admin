import React, { PureComponent } from 'react';
import './Loading.scss';

const imageLoader = require('../../../assets/images/loader.gif');

export default class Loading extends PureComponent {
  render() {
    return (
      <div styleName="loading">
        <img src={imageLoader} alt="carregando" />
      </div>
    );
  }
}
