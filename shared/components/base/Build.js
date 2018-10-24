import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '4px',
          textAlign: 'center',
          fontFamily: 'monospace',
          color: '#484848',
          zIndex: '-1',
        }}
      >
        build {process.env.BUILD_DATE}
      </div>
    );
  }
}
