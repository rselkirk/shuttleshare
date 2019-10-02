import uuid from 'uuid';

// ADD_SHUTTLE
export const addShuttle = (
  { origin = '',
    destination = '',
    date = 0,
    time = 0,
    spots = 0,
    cost = 0
  } = {}
) => ({
  type: 'ADD_SHUTTLE',
  shuttle: {
    id: uuid(),
    origin,
    destination,
    date,
    time,
    spots,
    cost
  }
});

// REMOVE_SHUTTLE
export const removeShuttle = ({ id } = {}) => ({
  type: 'REMOVE_SHUTTLE',
  id
});

// EDIT_SHUTTLE
export const editShuttle = (id, updates) => ({
  type: 'EDIT_SHUTTLE',
  id,
  updates
});