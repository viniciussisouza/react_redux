/**
 *
 * Select
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import selectTodo from '../../features/ToDo/selectors';
import messages from './messages';
import { appLocales } from '../../locales';
// eslint-disable-next-line import/no-unresolved
import { changeLocale } from '../../features/LanguageProvider/slice';

function Select() {
  /* eslint-disable no-unused-vars */
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  return (
    <>
      <select
        onChange={e => {
          dispatch(changeLocale({ locale: e.target.value }));
        }}
      >
        {appLocales.map((val, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={key} value={val.id}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
}

Select.propTypes = {};

export default Select;
