import React, { useState } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton'
import './PizzaCard.css'

function PizzaCard({ imgSrc, pizzaName, ingredients, price, clickMenu }) {
    function priceFun(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const [amount, setAmount] = useState(1);

    function changeAmount(e) {
        (e.target.classList.contains("minus")) ? (amount > 0) && setAmount(amount - 1) : setAmount(amount + 1)
    }

    function handleSubmit(e) {
        e.preventDefault();
        clickMenu();
        const cartItem = {
            amount: amount,
            pizzaImage: imgSrc,
            pizzaName: pizzaName,
            pizzaPrice: price
        }
        fetch("http://localhost:6789/add_to_cart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
    }

    return (
        <form className='pizzaCard' onSubmit={handleSubmit}>
            <img src={imgSrc} />
            <h2>{pizzaName}</h2>
            <h4>{ingredients}</h4>
            <div className='amountSelector'>
                {<PlusMinusButton text="-" sign="minus" changeAmount={changeAmount} />}
                <input type="number" name="amount" value={amount} />
                <PlusMinusButton text="+" sign="plus" changeAmount={changeAmount} />
            </div>
            <div className='bottomDiv'>
                <h3>{priceFun(price)} Ft</h3>
                <ActionButton text="Add" color="orange" />
            </div>
        </form>
  )
}

export default PizzaCard