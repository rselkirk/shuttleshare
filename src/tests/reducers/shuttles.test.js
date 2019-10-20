import moment from 'moment';
import shuttlesReducer from '../../reducers/shuttles';
import shuttles from '../fixtures/shuttles';

test('should set default state', () => {
  const state = shuttlesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove shuttle by id', () => {
  const action = {
    type: 'REMOVE_SHUTTLE',
    id: shuttles[1].id
  };
  const state = shuttlesReducer(shuttles, action);
  expect(state).toEqual([shuttles[0], shuttles[2]]);
});

test('should not remove shuttle if id not found', () => {
  const action = {
    type: 'REMOVE_SHUTTLE',
    id: '-1'
  };
  const state = shuttlesReducer(shuttles, action);
  expect(state).toEqual([shuttles[0], shuttles[1], shuttles[2]]);
});

test('should add a shuttle', () => {
  const shuttle = {
    id: '4',
    origin: 'Dewdney',
    destination: 'Rossland',
    date: moment(500),
    time: moment(500),
    spots: 1,
    cost: 400
  }
  const action = {
    type: 'ADD_SHUTTLE',
    shuttle
  };
  const state = shuttlesReducer(shuttles, action);
  expect(state).toEqual([...shuttles, shuttle]);
});

test('should edit a shuttle', () => {
  const spots = 6
  const action = {
    type: 'EDIT_SHUTTLE',
    id: shuttles[1].id,
    updates: {
      spots
    }
  };
  const state = shuttlesReducer(shuttles, action);
  expect(state[1].spots).toBe(spots);
});

test('should not edit an shuttle if id not found', () => {
  const cost = 300
  const action = {
    type: 'EDIT_SHUTTLE',
    id: '-1',
    updates: {
      cost
    }
  };
  const state = shuttlesReducer(shuttles, action);
  expect(state).toEqual(shuttles);
});