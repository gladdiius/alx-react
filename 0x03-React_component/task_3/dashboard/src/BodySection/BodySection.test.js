import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders children and one h2 element', () => {
    const title = 'Test Title';
    const childrenNode = <p>Test children node</p>;
    const wrapper = shallow(<BodySection title={title}>{childrenNode}</BodySection>);

    // Check if the div has class bodySection
    expect(wrapper.find('div.bodySection').exists()).toEqual(true);

    // Check if there is one h2 element and it includes the correct title
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual(title);

    // Check if there is one p element and it includes the correct children node
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('Test children node');
  });
});
