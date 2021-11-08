import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { getEvents } from '../../helpers/axios/eventCalls';

import addIcon from '../../assets/icons/add.png';
import editIcon from '../../assets/icons/edit.png';
import { Section, Wrapper } from './styles.js';

const Events = () => {
  const [events, setEvents] = useState('');
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);

  const limit = 6;

  useEffect(() => {
    getEvents(page, limit)
      .then(res => {
        const { length, events } = res.data;
        const pagesNumber = length / limit;

        setEvents(events);
        setPagination(pagesNumber);
      })
      .catch(() => { });
  }, [page]);

  const handlePagination = (e) => {
    const currentPage = e.selected + 1;
    setPage(currentPage);
  };

  return (
    <Section>
      <h1>
        Seznam Eventů
      </h1>
      <Wrapper>
        <div className="create-event">
          <div className="date">
          </div>
          <div className="event">
            <p>
              Vytvoř nový event
            </p>
          </div>
          <div className="author">
          </div>
          <div className="link">
            <Link to={{
              pathname: `events/create-event}`,
              state: "new"
            }}>
              <img src={addIcon} alt="add icon" />
            </Link>
          </div>
        </div>
        {events && events.map(event =>
          <div key={event._id}>
            <div className="date">
              {event.date.split('T')[0]}
            </div>
            <div className="event">
              <p>
                {event.name}
              </p>
            </div>
            <div className="author">
              <p>
                {event.author}
              </p>
            </div>
            <div className="link">
              <Link to={{
                pathname: `events/${event._id}`,
                state: event
              }}>
                <img src={editIcon} alt="edit-icon" />
              </Link>
            </div>
          </div>
        )}
      </Wrapper>
      {pagination &&
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => handlePagination(e)}
          pageCount={pagination}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      }
    </Section>
  );
};

export default Events;
