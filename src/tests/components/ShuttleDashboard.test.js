import React from 'react';
import { shallow } from 'enzyme';
import ShuttleDashboardPage from '../../components/ShuttleDashboardPage';

test('should render ShuttleDashboardPage correctly', () => {
  const wrapper = shallow(<ShuttleDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
