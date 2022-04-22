import React, { useEffect, useState } from 'react'
import PizzaCard from '../PizzaCard/PizzaCard'
import './PizzaCards.css'
import pizzas from '../../data/pizzas.json'

function PizzaCards({clickMenu}) {
    return (
        <div className='pizzaCards'>
            {pizzas.map(pizza => <PizzaCard key={pizza.id} imgSrc={pizza.image} pizzaName={pizza.name} ingredients={pizza.ingredients.join(", ")} price={pizza.price} clickMenu={clickMenu} />)}
        </div>
    )
}

export default PizzaCards