
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Hero from './Hero';
import Chicago from './Chicago';

function Homepage() {
    return (
        <main>
            <Hero />
            <Specials />
            <CustomersSay />
            <Chicago />
        </main>
    );
}

export default Homepage;