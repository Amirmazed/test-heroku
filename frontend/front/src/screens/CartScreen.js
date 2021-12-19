import React from 'react';
import CartItem from '../components/CartItem';
import './CartScreen.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    console.log(cart)
    return (
        <div className='cartscreen'>
            <div className='cartscreen__left'>
                <h2>Shopping Cart</h2>
                { cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem/>
                )) }
               
            </div>
            <div className='cartscreen__right'>
                <div className='cartscreen__info'>
                    <p>Subtotal (0) item</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;