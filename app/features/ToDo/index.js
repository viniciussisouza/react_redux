/**
 *
 * ToDo
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { Button } from '@material-ui/core';
import selectToDo, { selectToDoNames, selectToDoEmails } from './selectors';
import Buttonn from '../../components/Button';
import Select from '../../components/Select';
import { reducer, submitText, requestingData } from './slice';
import saga from './saga';
import messages from './messages';

function ToDo() {
  useInjectReducer({ key: 'toDo', reducer });
  useInjectSaga({ key: 'toDo', saga });

  /* eslint-disable no-unused-vars */
  const todo = useSelector(selectToDo);
  const emails = useSelector(selectToDoEmails);
  const names = useSelector(selectToDoNames);
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState('blue');
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [showNames, setShowNames] = useState(false);
  const [showEmails, setShowEmails] = useState(false);

  const getAllData = () => {
    dispatch(requestingData());
  };

  const onClick = () => {
    if (bgColor === 'blue') {
      setBgColor('red');
    } else {
      setBgColor('blue');
    }
  };

  const handleSubmit = () => {
    dispatch(submitText({ emailValue, nameValue }));
    setEmailValue('');
    setNameValue('');
  };

  const handleSelect = () => {
    if (selectOption === 'email') setShowEmails(true);
    else if (selectOption === 'name') setShowNames(true);
    getAllData();
  };

  return (
    <>
      <header>
        <div>
          <Select />
        </div>
        <div>
          <Buttonn bgColor={bgColor} onClick={onClick} />
        </div>
        <FormattedMessage {...messages.header} />
      </header>
      <section>
        <div>
          <form>
            <input
              type="text"
              value={emailValue}
              name="email"
              placeholder="email"
              onChange={e => setEmailValue(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="nome"
              value={nameValue}
              placeholder="nome"
              onChange={e => setNameValue(e.target.value)}
            />
            <br />
            <Button
              variant="contained"
              size="small"
              color="primary"
              type="button"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </form>
          <br />
        </div>
        <div>
          <h1>Lista de informações</h1>
          <form>
            <select onChange={e => setSelectOption(e.target.value)}>
              <option value="email">Emails</option>
              <option value="name">Nome</option>
            </select>
            <button type="button" onClick={handleSelect}>
              Exibir
            </button>
            <button
              type="button"
              onClick={() => {
                setShowNames(false);
                setShowEmails(false);
              }}
            >
              Limpar
            </button>
          </form>
        </div>
        <div>
          <p>Emails: </p>
          {showEmails &&
            emails &&
            // eslint-disable-next-line react/no-array-index-key
            emails.map(item => <li key={item.id}>{item.email}</li>)}
        </div>
        <div>
          <p>Nomes:</p>
          {showNames &&
            names &&
            // eslint-disable-next-line react/no-array-index-key
            names.map(item => <li key={item.id}>{item.name}</li>)}
        </div>
      </section>
    </>
  );
}

ToDo.propTypes = {};

export default ToDo;
