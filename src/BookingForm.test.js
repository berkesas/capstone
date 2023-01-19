import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})

test('input fields have correct attributes', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  render(<BookingForm availableTimes={availableTimes} />);
  const dateField = screen.getByPlaceholderText('Date');
  expect(dateField).toHaveAttribute('type', 'date');
  const timeField = screen.getByPlaceholderText('00:00');
  expect(timeField).toHaveAttribute('id', 'res-time');
  const guestsField = screen.getByPlaceholderText('1');
  expect(guestsField).toHaveAttribute('type', 'number');
  expect(guestsField).toHaveAttribute('min', '1');
  expect(guestsField).toHaveAttribute('max', '10');
  const occasionField = screen.getByPlaceholderText('Occasion');
  expect(occasionField).toHaveAttribute('aria-label', 'Occasion');
})

test('validate form with good values', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  render(<BookingForm
    availableTimes={availableTimes}
    setAvailableTimes={() => { return ['17:00', '18:00', '19:00'] }}
    submitForm={(e) => { return true }} />);
  const dateField = screen.getByPlaceholderText('Date');
  await fireEvent.change(dateField, {
    target: { value: '2023-01-18' },
  });
  const timeField = screen.getByPlaceholderText('00:00');
  await fireEvent.change(timeField, {
    target: { value: '17:00' },
  });
  const guestsField = screen.getByPlaceholderText('1');
  await fireEvent.change(guestsField, {
    target: { value: '2' },
  });
  const occasionField = screen.getByPlaceholderText('Occasion');
  await fireEvent.change(occasionField, {
    target: { value: 'Birthday' },
  });
  // const submitButton = screen.getByText('Make Your reservation');
  // expect(submitButton).toBeInTheDocument();
  // await userEvent.click(submitButton);
  const form = screen.getByTestId('form-reservation');
  fireEvent.submit(form);
  //there should be an error textw
  expect(screen.queryByText('Please select a valid date.')).toBeNull();
  expect(screen.queryByText('Please select a valid time.')).toBeNull();
  expect(screen.queryByText('Please select a valid number of guests.')).toBeNull();
  expect(screen.queryByText('Please select a valid occasion.')).toBeNull();
})

test('validate form with bad values', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  render(<BookingForm
    availableTimes={availableTimes}
    setAvailableTimes={() => { return ['17:00', '18:00', '19:00'] }}
    submitForm={(e) => { return true }} />);
  const dateField = screen.getByPlaceholderText('Date');
  await fireEvent.change(dateField, {
    target: { value: '' },
  });
  const timeField = screen.getByPlaceholderText('00:00');
  await fireEvent.change(timeField, {
    target: { value: '' },
  });
  const guestsField = screen.getByPlaceholderText('1');
  await fireEvent.change(guestsField, {
    target: { value: '16' },
  });
  const occasionField = screen.getByPlaceholderText('Occasion');
  await fireEvent.change(occasionField, {
    target: { value: '' },
  });
  // const submitButton = screen.getByText('Make Your reservation');
  // expect(submitButton).toBeInTheDocument();
  // await userEvent.click(submitButton);
  const form = screen.getByTestId('form-reservation');
  fireEvent.submit(form);
  //there should be an error textw
  expect(screen.queryByText('Please select a valid date.')).toBeInTheDocument();
  expect(screen.queryByText('Please select a valid time.')).toBeInTheDocument();
  expect(screen.queryByText('Please select a valid number of guests.')).toBeInTheDocument();
  expect(screen.queryByText('Please select a valid occasion.')).toBeInTheDocument();
})