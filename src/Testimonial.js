
function Testimonial(props) {
    return (
        <div className='testimonial'>
            <div className='testimonial-title mb-10'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
            </div>
            <div className='testimonial-photo-box'>
                <div>
                    <img className='testimonial-image' src={props.picture} alt='customer' />
                </div>
                <div className='color-dark'>{props.name}</div>
            </div>
            <div className='testimonial-body'>
                I had the best food ever
            </div>
        </div >
    )
}

export default Testimonial;