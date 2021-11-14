import React, { useState } from 'react';

import { postNewEvent, updateThisEvent, deleteThisEvent } from '../../../helpers/axios/eventCalls';

import SuccessPopup from '../../../components/popups/successPopup/SuccessPopup'
import ErrorPopup from '../../../components/popups/errorPopup/ErrorPopup';

import editIcon from '../../../assets/icons/edit.png';
import { Section, Card } from '../styles.js';

const Event = ({ location }) => {
  const [edit, setEdit] = useState(false);

  const { state } = location;
  const { author, description, date, name } = state;
  const { email } = JSON.parse(localStorage.getItem('user'));

  const [thisName, setThisName] = useState(name);
  const [thisDescription, setThisDescription] = useState(description);
  const [thisDate, setThisDate] = useState(date);
  const [previousName, setPreviousName] = useState(name);
  const [success, setSuccess] = useState()
  const [error, setError] = useState()

  const thisUser = author ? author : email;
  const fomrattedDate = date && date.split('T')[0];

  const postEvent = () => {
    postNewEvent(thisName, thisDescription, thisDate, thisUser)
      .then(() => {
        setSuccess('vytvořen')
      })
      .catch(err => setError(err));
  }

  const updateEvent = (e) => {
    updateThisEvent(previousName, thisName, thisDescription, thisDate, thisUser)
      .then(res => {
        const { data } = res;

        setPreviousName(data.name);
        setSuccess('upraven')
      })
      .catch(err => setError(err));
  }

  const deleteEvent = (e) => {
    deleteThisEvent(name)
      .then(() => {
        setSuccess('vymazán')
      })
      .catch(err => setError(err));
  }

  return (
    <>
      {success && <SuccessPopup link='/events' linkName='Stránku eventů' name={thisName} event={success} />}
      {error && <ErrorPopup link='/events' linkName='Stránku eventů' error={error} />}
      <Section>
        <Card>
          <div>
            {edit ?
              <input
                type='text'
                name='event name'
                defaultValue={name && name}
                onChange={(e) => setThisName(e.target.value)}
              /> :
              <h2>
                {name && name}
              </h2>
            }
            <img src={editIcon} alt='edit' onClick={() => setEdit(!edit)} />
          </div>
          <div className='content'>
            {edit ?
              <textarea
                type='text'
                name='event name'
                defaultValue={description && description}
                onChange={(e) => setThisDescription(e.target.value)}
              /> :
              <p>
                {description && description}
              </p>
            }
          </div>
          <div className='info'>
            <span>
              {author ? author : email}
            </span>
            <span>
              {edit ?
                <input
                  type='date'
                  name='budget'
                  defaultValue={fomrattedDate && fomrattedDate}
                  onChange={(e) => setThisDate(e.target.value)}
                /> :
                fomrattedDate && fomrattedDate
              }
            </span>
          </div>
        </Card>
        <button className='send' onClick={state === 'new' ? postEvent : updateEvent}>
          Odeslat
        </button>
        {state !== 'new' && (
          <button className='delete' onClick={deleteEvent}>
            Smazat
          </button>
        )}
      </Section>
    </>
  )
}

export default Event
