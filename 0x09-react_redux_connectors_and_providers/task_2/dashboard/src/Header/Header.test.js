import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={{}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct text when no user is logged in', () => {
    const wrapper = shallow(<Header user={null} />);
    expect(wrapper.find('h1').text()).toContain('School dashboard');
  });

  it('renders the correct text when a user is logged in', () => {
    const wrapper = shallow(<Header user={{ email: 'test@example.com' }} />);
    expect(wrapper.find('h1').text()).toContain('School dashboard');
  });
});
