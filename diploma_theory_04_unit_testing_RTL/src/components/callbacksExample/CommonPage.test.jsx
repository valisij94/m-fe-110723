import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CommonPage from './CommonPage.jsx';

describe('Testing CommonPage component', () => {
  it('renders CommonPage component', () => {
    render(<CommonPage />);
    const visibleEl = screen.getByText('This component is intended for useCallback demo');
    expect(visibleEl).toBeInTheDocument();
  });

  it('renders CommonPage component', () => {
    render(<CommonPage />);
    const inputEl = screen.getByRole('textbox');
    fireEvent.change(inputEl, { target: { value: 'NewAttempt' } });
    const btnEl = screen.getByRole('button');
    fireEvent.click(btnEl);
    const visibleEl = screen.getByText(/^NewAttempt/);
    expect(visibleEl).toBeInTheDocument();
  });

});