import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { AddShuttlePage } from '../../components/AddShuttlePage';
import shuttles from '../fixtures/shuttles';

let addShuttle, history, shallow, wrapper;

beforeEach(() => {
  addShuttle = jest.fn();
  history = { push: jest.fn() };
  shallow = createShallow();
  wrapper = shallow(<AddShuttlePage addShuttle={addShuttle} history={history} />)
});

test('should render AddShuttlePage correctly', () => {
  // expect(wrapper).toMatchSnapshot();
});

// test('should handle onSubmit', () => {
  // wrapper.find('ShuttleForm').prop('onSubmit')(shuttles[1]);
  // expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(addShuttle).toHaveBeenLastCalledWith(shuttles[1]);
// });