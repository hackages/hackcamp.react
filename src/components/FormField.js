import React from 'react';
import PropTypes from 'prop-types';

export const FormField = ({input, placeholder, type, meta: {touched, error}}) =>
  <div className={touched && error ? 'form-group has-danger' : 'form-group'}>

    {type === 'textarea'
      ? <textarea
          {...input}
          className="form-control"
          placeholder={placeholder}
          type={type}
        />
      : <input
          {...input}
          className="form-control"
          placeholder={placeholder}
          type={type}
        />}

    {touched && error && <div className="form-control-feedback">{error}</div>}
  </div>;

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};
