import React, { useEffect, useState } from 'react'
import PizzaCard from '../PizzaCard/PizzaCard';
import './PizzaCards.css'

function PizzaCards({clickMenu}) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(
        () => {
            fetch("/data/pizzas.json")
            .then(res => res.json())
            .then(pizzas => setPizzas(pizzas))
        },
        []
    )

    return (
        <div className='pizzaCards'>
            {pizzas.map(pizza => <PizzaCard key={pizza.id} imgSrc={pizza.image} pizzaName={pizza.name} ingredients={pizza.ingredients.join(", ")} price={pizza.price} clickMenu={clickMenu} />)}
        </div>
    )
}

export default PizzaCards