import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from './AppContext'; // Update this import based on the actual path

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('displays the "Contact us" link when the user is logged in', () => {
    const context = { user: { isLoggedIn: true } };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });

  it('does not display the "Contact us" link when the user is not logged in', () => {
    const context = { user: { isLoggedIn: false } };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });
});
