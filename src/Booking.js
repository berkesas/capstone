
function Booking() {
    return (
        <div className="col-12 centered">
            <div id='chicago' className="col-8">
                <div id='chicago-about' className="col-6">
                    <h1 className='chicago-display-title display-title col-dark'>Little Lemon</h1>
                    <h2 className='chicago-subtitle sub-title col-dark'>Chicago</h2>
                    <p className='chicago-text lead-text col-dark'>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                        in a lively but casual environment. The restaurant features a locally sourced menu with daily
                        specials.
                    </p>
                </div>
                <div id='chicago-image' className="col-6">
                    <img id='owners1' src={"/assets/img/owners1.jpg"} alt='owners 1' />
                    <img id='owners2' src={"/assets/img/owners2.jpg"} alt='owners 2' />
                </div>
            </div>
        </div>
    )
}

export default Booking;