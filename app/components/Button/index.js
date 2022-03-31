/**
 *
 * Button
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// eslint-disable-next-line react/prop-types
function Buttonn({ bgColor, onClick }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <Button
      variant="text"
      disableElevation
      size="small"
      // eslint-disable-next-line react/prop-types
      style={{ backgroundColor: bgColor }}
      // eslint-disable-next-line react/prop-types
      onClick={onClick}
    >
      <FormattedMessage {...messages.header} />
    </Button>
  );
}

Buttonn.propTypes = {};

export default Buttonn;
