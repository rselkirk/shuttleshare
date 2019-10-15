import React from 'react';
// import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { ShuttleList } from '../../components/ShuttleList';
import shuttles from '../fixtures/shuttles';

let shallow;

beforeAll(() => {
  shallow = createShallow();
});

test('should render shuttle list with shuttles', () => {
  // const wrapper = shallow(<ShuttleList shuttles={shuttles} />);
  // expect(wrapper).toMatchSnapshot();
});

// test('should render ShuttleList with empty message', () => {
//   const wrapper = shallow(<ShuttleList shuttles={[]} />);
//   expect(wrapper).toMatchSnapshot();
// });
