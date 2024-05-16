import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('renders a BodySection component and passes props correctly', () => {
    const title = 'Test Title';
    const children = <p>Test content</p>;
    const wrapper = shallow(<BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>);

    // Check if BodySectionWithMarginBottom renders a BodySection component
    expect(wrapper.find(BodySection).exists()).toEqual(true);

    // Check if BodySectionWithMarginBottom passes props correctly to the BodySection component
    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(children);
  });
});
