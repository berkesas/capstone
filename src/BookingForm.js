import { useState } from "react";

function BookingForm(props) {
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // console.log(props.availableTimes)
    // return (<></>)

    // const getIsFormValid = () => {
    //     return (
    //         bookingDate
    //     );
    // };

    let availableTimesOptions = props.availableTimes.map((v, i) => <option key={i} value={v}>{v}</option>);

    const handleChange = (e, id) => {
        switch (id) {
            case 'bookingTime':
                setBookingTime(e.target.value)
                break;
            case 'bookingDate':
                props.setAvailableTimes({ date: e.target.value });
                setBookingDate(e.target.value);
                break;
            default:
        }
    }

    const clearForm = () => {
        setBookingDate("");
        setBookingTime("");
        setNumberOfGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        clearForm();
    };

    return (
        <div className="col-12 centered">
            <div id='chicago' className="col-8">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-title color-dark">Reserve a Table</h1>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="res-date">Choose date</label>
                            <input
                                aria-label="Choose a date"
                                type='date'
                                value={bookingDate}
                                onChange={(e) => {
                                    handleChange(e, 'bookingDate');
                                }}
                                placeholder="Date"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time" value={bookingTime} onChange={(e) => {
                                handleChange(e, 'bookingTime');
                            }} aria-label="Choose a time">
                                {availableTimesOptions}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests"
                                value={numberOfGuests} onChange={(e) => {
                                    setNumberOfGuests(e.target.value);
                                }} aria-label="Number of guests" />
                        </div>
                        <div className="field">
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occasion} onChange={(e) => {
                                setOccasion(e.target.value);
                            }}
                                aria-label="Occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="field mb-20">
                            <input className='btn-rounded bg-primary-light lead-text mt-20'
                                type="submit"
                                value="Make Your reservation"
                                aria-label="Make Your reservation"
                                aria-pressed="false" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;