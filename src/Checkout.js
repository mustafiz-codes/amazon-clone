import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'
import './checkout.css';
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items</p>
                    </div>
                ) : (
                        <div>
                            <h2>Your Shopping Basket : </h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    {/* <h1>Subtotal</h1> */}
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
