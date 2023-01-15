import OrderLink from "./OrderLink";

function SpecialDish(props) {
    return (
        <div className='special-dish'>
            <div>
                <img className='special-dish-image' src={props.picture} alt='special dish' />
            </div>
            <div className='special-dish-body'>
                <div className='special-dish-title'>
                    <h5 className='col-black bold'>{props.title}</h5>
                    <h5 className='col-red1'>${props.price}</h5>
                </div>
                <div className='special-dish-description font-14'>
                    The famous greek salad of crispy lettuce, peppers, olives and
                    our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </div>
                <OrderLink />
            </div>
        </div >
    )
}

export default SpecialDish;