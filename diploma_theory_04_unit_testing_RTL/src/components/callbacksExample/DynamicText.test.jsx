import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DynamicText from './DynamicText';

describe('Testing DynamicText component', () => {
  it('renders DynamicText component with props', () => {
    render(<DynamicText text="Something" />);
    const visibleEl = screen.getByText('Something');
    expect(visibleEl).toBeInTheDocument();
  });

  it('renders DynamicText component without props', () => {
    render(<DynamicText />);
    const visibleEl = screen.getByText('Dummy!');
    expect(visibleEl).toBeInTheDocument();
  });

});