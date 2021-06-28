/**
 *
 * InputCleave
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';
import { Input } from 'reactstrap';

function MaskedTextField(props) {
  const { options, inputRef, ...other } = props;
  return <Cleave {...other} ref={inputRef} options={options} />;
}

function InputCleave({
  // input: { name, onChange, value, label, ...restInput },
  error,
  meta,
  ...rest
}) {
  return (
    <Input
      {...rest}
      error={error}
      helperText={meta && meta.touched ? meta.error : undefined}
      tag={MaskedTextField}
    />
  );
}

InputCleave.propTypes = {};

export default InputCleave;
