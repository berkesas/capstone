import dish_icon from './assets/img/dish-icon.svg';

function OrderLink() {
    return (
        <div className='special-dish-link mb-20'>
            <a href='/order'>
                Order a delivery
                <img src={dish_icon} alt='dish icon' className='order-link-image' />
            </a>
        </div>
    )
}

export default OrderLink;