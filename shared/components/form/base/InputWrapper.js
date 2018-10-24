import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field } from 'react-form';
import './InputWrapper.scss';

export default class InputWrapper extends PureComponent {
  static propTypes = {
    validate: PropTypes.func,
    preValidate: PropTypes.func,
    field: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    light: PropTypes.bool,
    children: PropTypes.element.isRequired,
  };

  handleChange(e, fieldApi) {
    const { onChange } = this.props;
    const { setValue, setTouched } = fieldApi;
    setTouched(false);
    setValue(e.target.value);
    if (onChange) onChange(e.target.value, e);
  }

  handleBlur(e, fieldApi) {
    const { onBlur } = this.props;
    const { setTouched } = fieldApi;
    setTouched(true);
    if (onBlur) onBlur(e);
  }

  handleRender(fieldApi) {
    const { children, light, value } = this.props;

    return (
      <div styleName={classNames('input-wrapper', { light })}>
        {React.cloneElement(children, {
          value: fieldApi.value || value || '',
          onChange: e => this.handleChange(e, fieldApi),
          onBlur: e => this.handleBlur(e, fieldApi),
          fieldApi,
        })}
      </div>
    );
  }

  render() {
    const { field, validate, preValidate, placeholder } = this.props;

    const key = field + placeholder; // used to force Field to rerender when placeholder changes

    return (
      <Field
        key={key}
        preValidate={preValidate}
        validate={validate}
        field={field}
        {...this.props}
      >
        {fieldApi => this.handleRender(fieldApi)}
      </Field>
    );
  }
}
