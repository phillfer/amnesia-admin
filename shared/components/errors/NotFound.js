import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends Component {
  static propTypes = {
    staticContext: PropTypes.shape({ missed: PropTypes.bool }),
  };

  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.missed = true;
    }
  }

  render() {
    return <div>Sorry, that page was not found.</div>;
  }
}
