import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Booking from './Booking';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
