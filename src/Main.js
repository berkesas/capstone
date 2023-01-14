import Button from './Button';
import restaurant from './assets/img/restauranfood.jpg'

function Main() {
    return (
        <main>
            <div className='main bg-primary-dark hero mt-20'>
                <div>
                    <h1 className='display-title col-yellow mt-20'>Little Lemon</h1>
                    <h2 className='sub-title col-gray'>Chicago</h2>
                    <p className='lead-text col-gray'>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
                        in a lively but casual environment. The restaurant features a locally sourced menu with daily
                        specials.
                    </p>
                    <Button className='btn-rounded bg-primary-light lead-text mt-20'>Reserve a Table</Button>
                </div>
                <div className='hero-image'>
                    <img src={restaurant} alt='restaurant' />
                </div>
            </div>
            <div className='mt-20 p-20'>
                <h1 className='display-title'>This week's specials</h1>
                <div id='specials'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </main>
    );
}

export default Main;