import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

const DATA = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
];
test('renders todo-0', () => {
  render(<App tasks={DATA}/>);
  const eatElements = screen.getAllByText(/Eat/i);
  for (let element of eatElements) {
    expect(element).toBeInTheDocument();
  }
});

test('3 tasks remaining', () => {
  render(<App tasks={DATA}/>);
  const linkElement = screen.getByText(/3 tasks remaining/i);
  expect(linkElement).toBeInTheDocument();
});