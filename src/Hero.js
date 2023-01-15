import Button from './Button';
import restaurant from './assets/img/restauranfood.jpg'

function Hero() {
    return (
        <div id='hero' className='col-12 centered'>
            <div className='wrapper col-8'>
                <div id='hero-about' className='col-6'>
                    <h1 className='hero-title display-title col-yellow'>Little Lemon</h1>
                    <h2 className='hero-subtitle sub-title col-gray'>Chicago</h2>
                    <p className='hero-text lead-text col-gray'>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                        in a lively but casual environment. The restaurant features a locally sourced menu with daily
                        specials.
                    </p>
                    <div id='hero-button'>
                        <Button className='btn-rounded bg-primary-light lead-text mt-20'>Reserve a Table</Button>
                    </div>
                </div>
                <div id='hero-image' className='col-6'>
                    <img src={restaurant} alt='restaurant' />
                </div>
            </div>
        </div>
    )
}

export default Hero;