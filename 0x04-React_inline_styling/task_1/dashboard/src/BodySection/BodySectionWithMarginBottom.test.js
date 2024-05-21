// BodySectionWithMarginBottom.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

// Mock BodySection component
jest.mock('./BodySection', () => ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
));

describe('BodySectionWithMarginBottom Component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(getByText('test title')).toBeInTheDocument();
    expect(getByText('test children node')).toBeInTheDocument();
  });

  test('applies correct margin style', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const divElement = container.firstChild;
    expect(divElement).toHaveStyle('margin-bottom: 40px');
  });
});
