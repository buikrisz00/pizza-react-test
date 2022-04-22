import React, { useState, useEffect } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import MenuListItem from '../MenuListItem/MenuListItem';
import './Menu.css'

function Menu({menuClicked}) {
    function priceFun(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const [cart, setCart] = useState([]);

    useEffect(
        () => {
        fetch("/data/cart.json")
        .then(res => res.json())
        .then(cartData => {
            setCart(cartData)
        })
        }
    )

    return (
        <nav className={menuClicked}>
            <h2>Your order:</h2>
            <ActionButton text="Clear" color="black" />
            <div className='innerMenu'>
                {cart.map(cartItem => <MenuListItem pizzaImage={cartItem.pizzaImage} pizzaName={cartItem.pizzaName} amount={cartItem.amount} pizzaPrice={priceFun(cartItem.pizzaPrice)} />)}
            </div>
            <a href=""><ActionButton text="Order" color="orange" /></a>
        </nav>
    )
}

export default Menu