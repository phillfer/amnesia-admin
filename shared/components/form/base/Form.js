import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';

import './Form.scss';

export default class CustomForm extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div>
        <Form {...rest}>
          {formApi => (
            <form
              onSubmit={formApi.submitForm}
              styleName="form"
              className={className}
            >
              {React.Children.map(children, child =>
                React.cloneElement(
                  child,
                  typeof child.type !== 'string' && { formApi },
                ),
              )}
            </form>
          )}
        </Form>
      </div>
    );
  }
}
