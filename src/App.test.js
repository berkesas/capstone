import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test('fetchAPI returns array', async () => {
  const dom = render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();

  await userEvent.click(screen.getByText('Reservations'))

  // ASSERT
  expect(screen.getByText('Choose date')).toBeInTheDocument();
  const options1 = screen.getAllByRole('option');
  // expect(screen.getAllByText('17:00', { selector: 'option' })).toHaveLength(1);
  expect(options1.length).toBeGreaterThan(2);

  await fireEvent.change(screen.getByPlaceholderText('Date'), {
    target: { value: '01/11/2022' },
  });

  //total options length changes
  const options2 = screen.getAllByRole('option');
  // console.log(options1[0], options2[0]);
  // expect(Math.abs(options1.length - options2.length)).toBeGreaterThan(0);

});