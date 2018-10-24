import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';
import InputIcon from './InputIcon';
import InputMessages from './InputMessages';
import InputLabel from './InputLabel';
import InputClearable from './InputClearable';

import InputFocus from './InputFocus';
import InputSelect from './InputSelect';
import InputTextarea from './InputTextarea';
import InputMasked from './InputMasked';
import InputSimple from './InputSimple';

class InputBuilder extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    textarea: PropTypes.bool,
    messages: PropTypes.bool,
    mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    clearable: PropTypes.bool,
    autofocus: PropTypes.bool,
    forwardedRef: PropTypes.shape({}),
  };

  static defaultProps = {
    placeholder: 'Input',
    messages: true,
  };

  render() {
    const {
      options,
      textarea,
      messages,
      mask,
      placeholder,
      icon,
      clearable,
      forwardedRef,
      autofocus,
    } = this.props;
    let input = null;

    const props = {
      ...this.props,
      forwardedRef: forwardedRef || React.createRef(),
    };

    if (options) input = <InputSelect {...props} />;
    else if (textarea) input = <InputTextarea {...props} />;
    else if (mask) input = <InputMasked {...props} />;
    else input = <InputSimple {...props} />;

    if (autofocus) input = <InputFocus {...props}>{input}</InputFocus>;
    if (icon) input = <InputIcon {...props}>{input}</InputIcon>;
    if (messages) input = <InputMessages {...props}>{input}</InputMessages>;
    if (placeholder) input = <InputLabel {...props}>{input}</InputLabel>;
    if (clearable) input = <InputClearable {...props}>{input}</InputClearable>;

    return input;
  }
}

export default React.forwardRef((props, ref) => (
  <InputWrapper {...props}>
    <InputBuilder {...props} forwardedRef={ref} />
  </InputWrapper>
));
