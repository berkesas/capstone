import Testimonial from './Testimonial';

function CustomersSay() {
    return (
        <div className='bg-primary-dark col-12 centered'>
            <div id='testimonials-container' className='col-8'>
                <div className='col-12 col-yellow text-center'>
                    <h1 className='display-title'>Testimonials</h1>
                </div>
                <div className='testimonials-body col-12'>
                    <Testimonial picture={"/assets/img/person1.jpg"} name='John' price='5.00' />
                    <Testimonial picture={"/assets/img/person1.jpg"} name='Jane' price='8.50' />
                    <Testimonial picture={"/assets/img/person1.jpg"} name='Priscilla' price='13.00' />
                    <Testimonial picture={"/assets/img/person1.jpg"} name='Heidi' price='13.00' />
                </div>
            </div>
        </div>
    )
}

export default CustomersSay;