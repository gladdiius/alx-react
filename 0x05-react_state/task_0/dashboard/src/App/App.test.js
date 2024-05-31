import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import CourseList from './CourseList';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Login component when logged out', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the CourseList component when logged in', () => {
    wrapper.setState({ loggedIn: true });
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('sets displayDrawer to false by default', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('sets displayDrawer to true when handleDisplayDrawer is called', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('sets displayDrawer to false when handleHideDrawer is called', () => {
    wrapper.instance().handleDisplayDrawer(); // First open the drawer
    wrapper.instance().handleHideDrawer(); // Then close the drawer
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('passes the correct props to Notifications component', () => {
    const notificationsProps = wrapper.find(Notifications).props();
    expect(notificationsProps.displayDrawer).toBe(wrapper.state('displayDrawer'));
    expect(notificationsProps.handleDisplayDrawer).toBe(wrapper.instance().handleDisplayDrawer);
    expect(notificationsProps.handleHideDrawer).toBe(wrapper.instance().handleHideDrawer);
  });
});
