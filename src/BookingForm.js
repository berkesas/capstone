import { useState } from "react";

function FieldError(props) {
    return (
        <div className='error-field color-error'>{props.children}</div>
    )
}

function BookingForm(props) {
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");
    const [submitReady, setSubmitReady] = useState(true);
    const [errors, setErrors] = useState({
        'bookingDate': '',
        'bookingTime': '',
        'numberOfGuests': '',
        'occasion': ''
    });
    // const [touched, setTouched] = useState({
    //     'bookingDate': false,
    //     'bookingTime': false,
    //     'numberOfGuests': false,
    //     'occasion': false
    // });

    // This should be a reducer instead of useState in prod
    // const handleTouch = (e, val) => {
    //     //e.preventDefault();
    //     let newTouched = {
    //         'bookingDate': false,
    //         'bookingTime': false,
    //         'numberOfGuests': false,
    //         'occasion': false
    //     };
    //     newTouched[val] = true;
    //     setTouched(newTouched);
    //     //getIsFormValid();
    // }

    const getIsFormValid = () => {
        let newErrors = {
            'bookingDate': '',
            'bookingTime': '',
            'numberOfGuests': '',
            'occasion': ''
        };
        let errorCount = 0;

        if (bookingDate.length === 0) {
            newErrors['bookingDate'] = "Please select a valid date.";
            errorCount++;
        }
        if (bookingTime.length === 0) {
            newErrors['bookingTime'] = "Please select a valid time.";
            errorCount++;
        }
        console.log(bookingTime);
        if (parseInt(numberOfGuests) < 1 || parseInt(numberOfGuests) > 10) {
            newErrors['numberOfGuests'] = "Please select a valid number of guests.";
            errorCount++;
        }
        if (occasion.length === 0) {
            newErrors['occasion'] = "Please select a valid occasion.";
            errorCount++;
        }
        console.log(occasion);
        setErrors(newErrors);
        setSubmitReady(errorCount);
        return (!errorCount);
    };

    let availableTimesOptions = props.availableTimes.map((v, i) => <option key={i} value={v}>{v}</option>);

    const handleChange = (e, id) => {
        switch (id) {
            case 'bookingDate':
                props.setAvailableTimes({ date: e.target.value });
                setBookingTime(props.availableTimes[0]);
                setBookingDate(e.target.value);
                break;
            case 'bookingTime':
                setBookingTime(e.target.value)
                break;
            case 'numberOfGuests':
                setNumberOfGuests(e.target.value);
                break;
            case 'occasion':
                setOccasion(e.target.value);
                console.log(e.target.value);
                break;
            default:
        }
        //getIsFormValid();
    }

    const clearForm = () => {
        setBookingDate("");
        setBookingTime("");
        setNumberOfGuests("");
        setOccasion("");
        setSubmitReady(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getIsFormValid();
        props.submitForm(e);
        clearForm();
    };

    return (
        <div className="col-12 centered">
            <div id='chicago' className="col-8 p-20">
                <form onSubmit={handleSubmit} data-testid="form-reservation">
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
                                required
                            />
                        </div>
                        <FieldError>{errors['bookingDate']}</FieldError>
                        <div className="field">
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time"
                                value={bookingTime}
                                onChange={(e) => {
                                    handleChange(e, 'bookingTime');
                                }}
                                aria-label="Choose a time"
                                placeholder="00:00">
                                {availableTimesOptions}
                            </select>
                        </div>
                        <FieldError>{errors['bookingTime']}</FieldError>
                        <div className="field">
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests"
                                value={numberOfGuests} onChange={(e) => {
                                    handleChange(e, 'numberOfGuests');
                                }} aria-label="Number of guests"
                                onBlur={getIsFormValid}
                                required />
                        </div>
                        <FieldError>{errors['numberOfGuests']}</FieldError>
                        <div className="field">
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occasion}
                                onChange={(e) => {
                                    handleChange(e, 'occasion');
                                }}
                                aria-label="Occasion" placeholder='Occasion'>
                                <option key={1} value="Birthday">Birthday</option>
                                <option key={2} value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <FieldError>{errors['occasion']}</FieldError>
                        <div className="field button-rows mb-20">
                            <input className='btn-rounded bg-primary-light lead-text mt-20'
                                type="submit"
                                value="Make Your reservation"
                                aria-label="Make Your reservation"
                                aria-pressed="false"
                                disabled={submitReady} />
                            <input className='btn-rounded bg-primary-light lead-text mt-20 ml-10'
                                type="reset"
                                value="Clear Form"
                                aria-label="Clear Form"
                                aria-pressed="false" 
                                onClick={clearForm}/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;