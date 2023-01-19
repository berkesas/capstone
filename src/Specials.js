import Button from './Button';
import SpecialDish from './SpecialDish';

function Specials() {
    return (
        <div className='col-12 centered'>
            <div className='wrapper col-8'>
                <div id='specials-header' className='col-12'>
                    <div className='col-8'>
                        <h1 className='display-title'>This week's specials</h1>
                    </div>
                    <div id='specials-button' className='col-4'>
                        <Button className='btn-rounded bg-primary-light lead-text'>Online Menu</Button>
                    </div>
                </div>
                <div id='specials-body' className='col-12'>
                    <SpecialDish picture={"/assets/img/bruchetta.png"} title='Greek Salad' price='5.00' />
                    <SpecialDish picture={"/assets/img/greek_salad.jpg"} title='Bruchetta' price='8.50' />
                    <SpecialDish picture={"/assets/img/lemon_dessert.jpg"} title='Lemon Dessert' price='13.00' />
                </div>
            </div>
        </div>
    )
}

export default Specials;