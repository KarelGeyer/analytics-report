import { eventInstance } from './axios';

export const getEvents = (page, limit) => {
  return eventInstance.get(`?page=${page}&limit=${limit}`);
}

export const postNewEvent = (thisName, thisDescription, thisDate, thisUser) => {
  return eventInstance.post('', {
    name: thisName,
    description: thisDescription,
    date: thisDate,
    author: thisUser
  });
}

export const updateThisEvent = (previousName, thisName, thisDescription, thisDate, thisUser) => {
  return eventInstance.patch('', {
    previousName: previousName,
    name: thisName,
    description: thisDescription,
    date: thisDate,
    author: thisUser
  });
}

export const deleteThisEvent = (name) => {
  return eventInstance.delete('', { data: { name: name } });
}