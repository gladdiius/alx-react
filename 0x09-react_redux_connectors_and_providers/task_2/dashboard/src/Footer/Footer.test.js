import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer user={{}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct text when no user is logged in', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('p').text()).toContain('Contact us');
  });

  it('renders the correct text when a user is logged in', () => {
    const wrapper = shallow(<Footer user={{ email: 'test@example.com' }} />);
    expect(wrapper.find('p').text()).toContain('test@example.com');
  });
});
