import React, { useState, useEffect } from 'react'
import './MenuListItem.css'

function MenuListItem({ pizzaImage, pizzaName, amount, pizzaPrice }) {
    console.log(pizzaImage, pizzaName, amount, pizzaPrice);
    return (
        <div className='menuListItem'>
            <img src={pizzaImage} />
            <h2>{pizzaName}</h2>
            <h4>{amount} x {pizzaPrice}</h4>
        </div>
    )
}

export default MenuListItem