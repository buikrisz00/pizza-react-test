import React, { useState, useEffect } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import MenuListItem from '../MenuListItem/MenuListItem'
import './Menu.css'
import cart from '../../data/cart.json'

function Menu({menuClicked}) {
    function priceFun(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <nav className={menuClicked}>
            <h2>Your order:</h2>
            <ActionButton text="Clear" color="black" />
            <div className='innerMenu'>
                {cart.map(cartItem => <MenuListItem pizzaImage={cartItem.pizzaImage} pizzaName={cartItem.pizzaName} amount={cartItem.amount} pizzaPrice={priceFun(cartItem.pizzaPrice)} />)}
            </div>
            <ActionButton text="Order" color="orange" />
        </nav>
    )
}

export default Menu