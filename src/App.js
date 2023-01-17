import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import BookingForm from './BookingForm';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return fetchAPI(new Date())
  }

  useEffect(() => {
    initializeTimes()
  });

  const updateTimes = (state, action) => {
    // return ['17:00', '18:00', '19:00'];
    // console.log(state);
    return fetchAPI(new Date(action.date))
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmedbooking');
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={
          <BookingForm
            availableTimes={availableTimes}
            setAvailableTimes={dispatch}
            submitForm={submitForm}
          />}></Route>
        <Route path="/confirmedbooking" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
