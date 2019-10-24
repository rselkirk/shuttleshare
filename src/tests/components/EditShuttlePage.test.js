import React from 'react';
// import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { EditShuttlePage } from '../../components/EditShuttlePage';
import shuttles from '../fixtures/shuttles';

let editShuttle, removeShuttle, history, shallow, wrapper;

beforeEach(() => {
  editShuttle = jest.fn();
  removeShuttle = jest.fn();
  history = { push: jest.fn() };
  shallow = createShallow();
  wrapper = shallow(
    <EditShuttlePage
      editShuttle={editShuttle}
      removeShuttle={removeShuttle}
      history={history}
      shuttle={shuttles[2]}
    />
  );
});

test('should render the EditShuttlePage', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle EditShuttle', () => {
//   wrapper.find('ShuttleForm').prop('onSubmit')(shuttles[2]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(editShuttle).toHaveBeenLastCalledWith(shuttles[2].id, shuttles[2]);
// });

test('should handle removeShuttle', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeShuttle).toHaveBeenLastCalledWith({
    id: shuttles[2].id
  });
});