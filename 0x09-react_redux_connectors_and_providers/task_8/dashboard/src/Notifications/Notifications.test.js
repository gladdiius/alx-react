// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications'; // Import the unconnected component for testing
import toJson from 'enzyme-to-json';

describe('Notifications Component', () => {
  let wrapper;
  let setFilterMock = jest.fn(); // Mock setNotificationFilter action

  beforeEach(() => {
    wrapper = shallow(<Notifications notifications={[]} setFilter={setFilterMock} />);
  });

  afterEach(() => {
    setFilterMock.mockClear();
  });

  it('should call setNotificationFilter with URGENT when first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('urgent');
  });

  it('should call setNotificationFilter with DEFAULT when second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('default');
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
