import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputTextarea.scss';

export default class InputTextarea extends Component {
  static propTypes = {
    forwardedRef: PropTypes.shape({}),
    onChange: PropTypes.func,
    value: PropTypes.string,
    maxLines: PropTypes.number,
    light: PropTypes.bool,
  };

  static defaultProps = {
    maxLines: 5,
  };

  state = {
    height: 24,
  };

  onChange(e) {
    const { onChange, maxLines } = this.props;
    let value = e.target.value;
    value = value.replace(/^\n/g, '');
    value = value.replace(/\n\n\n/g, '\n\n');
    const lines = value.split('\n');
    if (lines.length > maxLines) value = lines.slice(0, maxLines).join('\n');
    onChange({ target: { value } });
  }

  updateHeight() {
    const { forwardedRef } = this.props;
    this.setState({ height: forwardedRef.current.scrollHeight });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.height === nextState.height &&
      this.props.value === nextProps.value
    )
      return false;
    return true;
  }

  componentDidMount() {
    if (this.props.value) this.updateHeight();
  }

  componentDidUpdate({ value }) {
    if (value !== this.props.value) this.updateHeight();
  }

  render() {
    const { forwardedRef, value, light } = this.props;
    const { height } = this.state;
    return (
      <div styleName={classNames('textarea', { light })}>
        <textarea
          style={{ height }}
          ref={forwardedRef}
          onChange={e => this.onChange(e)}
          value={value}
        />
      </div>
    );
  }
}
