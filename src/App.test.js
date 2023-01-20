import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test('fetchAPI returns array', async () => {
  const dom = render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();

  await userEvent.click(screen.getAllByText('Reservations')[0])

  // ASSERT
  expect(screen.getByText('Choose date')).toBeInTheDocument();
  const cbx = screen.getAllByRole('combobox');
  const cbx1 = cbx[0]; //bookingTime select
  expect(cbx1).toBeInTheDocument();

  const options1 = cbx1.childNodes;
  //get time options before date change
  const lastItem1 = options1[options1.length - 1].value;
  console.log('length1:', lastItem1);
  await fireEvent.change(screen.getByTestId('bookingDate'), { target: { value: '2022-01-23' }, });
  //get time options after date change
  const options2 = cbx1.childNodes;
  const lastItem2 = options2[options2.length - 1].value;
  console.log('length2:', lastItem2);

  // compare last option in time field
  const check = (lastItem1 === lastItem2);
  console.log('check:', check);
  expect(check).toBe(false);

});