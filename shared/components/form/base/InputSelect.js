import React, { Component } from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './InputSelect.scss';

class InputSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.object, label: PropTypes.string }),
    ),
    forwardedRef: PropTypes.shape({}),
    onChange: PropTypes.func,
    light: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange({
      target: { value },
    });
  };

  compareOptions = (value, options) => {
    const candidate = value.toLowerCase();
    const result = options.some(
      option =>
        this.getOptionValue(option).toLowerCase() === candidate ||
        this.getOptionLabel(option).toLowerCase() === candidate,
    );
    return result;
  };

  isValidNewOption = (value, selecteds, options) =>
    value &&
    value.length > 3 &&
    !this.compareOptions(value, selecteds) &&
    !this.compareOptions(value, options);

  getOptionValue = ({ slug, name }) => (slug ? `${slug}` : name);

  getOptionLabel = ({ slug, name }) => (slug ? name : `Criar '${name}'`);

  getNewOptionData = value => ({ name: value });

  render() {
    const { options, value, forwardedRef, light } = this.props;

    const isnew = value && !value.slug;

    return (
      <Select
        ref={forwardedRef}
        styleName={classNames('select', { isnew, light })}
        hideSelectedOptions
        openMenuOnFocus
        classNamePrefix="InputSelect"
        options={options}
        placeholder=""
        value={value || ''}
        getOptionValue={this.getOptionValue}
        getOptionLabel={this.getOptionLabel}
        onChange={this.handleChange}
        isValidNewOption={this.isValidNewOption}
        getNewOptionData={this.getNewOptionData}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <InputSelect {...props} forwardedRef={ref} />
));
