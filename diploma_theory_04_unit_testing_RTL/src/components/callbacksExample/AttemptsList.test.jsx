import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AttemptsList from './AttemptsList';

describe('Testing AttemptsList component', () => {
  it('renders AttemptsList component with props', () => {
    render(<AttemptsList attempts={[ {id: 1, attemptData: 'Data'} ]} />);
    const visibleEl = screen.getByText('Data 1');
    expect(visibleEl).toBeInTheDocument();
  });

  it('renders AttemptsList component with empty array in props', () => {
    render(<AttemptsList attempts={[]} />);
    const visibleEl = screen.getByText('Empty Attempts List!');
    expect(visibleEl).toBeInTheDocument();
  });

  it('renders AttemptsList component without props', () => {
    render(<AttemptsList />);
    const visibleEl = screen.getByText('Empty Attempts List!');
    expect(visibleEl).toBeInTheDocument();
  });

  it('AttemptsList click handler', () => {
    // делаем заглушку - типа функцию обработчик клика
    const dropAttemptMock = jest.fn();
    // рендерим компонент с пропсами
    render(<AttemptsList attempts={[ {id:1, attemptData: 'SimpleAttempt'} ]} dropAttempt={dropAttemptMock} />);
    // ищем нечто с текстом SimpleAttempt 1
    const attemptEl = screen.getByText('SimpleAttempt 1');
    expect(attemptEl).toBeInTheDocument();
    // ожидаем, что ДО нажатия на элепмент списка с  попыткой функция из пропса dropAttempt НЕ БУДЕТ вызвана
    expect(dropAttemptMock).not.toBeCalled();
    // генерируем событие клика на этом элементе
    fireEvent.click(attemptEl);
    // ожидаем, что после этого наша функция-обработчик будет вызвана один раз
    expect(dropAttemptMock).toBeCalled();
    // и вызвана с конкретным аргументом
    expect(dropAttemptMock).toBeCalledWith(1);
  });
});