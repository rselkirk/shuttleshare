import { addShuttle, editShuttle, removeShuttle } from '../../actions/shuttles';

test('should setup remove shuttle action object', () => {
  const action = removeShuttle({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_SHUTTLE',
    id: '123abc'
  });
});

test('should setup edit shuttle action object', () => {
  const action = editShuttle('123abc', { spots: 3 });
  expect(action).toEqual({
    type: 'EDIT_SHUTTLE',
    id: '123abc',
    updates: {
      spots: 3
    }
  });
});

test('should setup add shuttle action object with provided values', () => {
  const shuttleData = {
    origin: 'Rossland',
    destination: 'Neptune Creek',
    date: 1570043108,
    time: 1570043108,
    spots: 3,
    cost: 500
  };
  const action = addShuttle(shuttleData);
  expect(action).toEqual({
    type: 'ADD_SHUTTLE',
    shuttle: {
      ...shuttleData,
      id: expect.any(String)
    }
  });
});

test('should setup add shuttle action object with default values', () => {
  const action = addShuttle();
  expect(action).toEqual({
    type: 'ADD_SHUTTLE',
    shuttle: {
      id: expect.any(String),
      origin: '',
      destination: '',
      date: 0,
      time: 0,
      spots: 0,
      cost: 0
    }
  })
});