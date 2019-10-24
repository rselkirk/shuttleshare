import React from 'react';
// import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import moment from 'moment';
import ShuttleForm from '../../components/ShuttleForm';
import shuttles from '../fixtures/shuttles';

let shallow;

beforeAll(() => {
  shallow = createShallow();
});

test('should render ShuttleForm correctly', () => {
  const wrapper = shallow(<ShuttleForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ShuttleForm with shuttle data', () => {
  const wrapper = shallow(<ShuttleForm shuttle={shuttles[0]} />)
  expect(wrapper).toMatchSnapshot();
});

// test('should set new date on date change', () => {
// });

// test('should set calendar focus on change', () => {
// });
