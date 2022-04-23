import React, { useState, useEffect } from 'react'
import PizzaCards from '../PizzaCards/PizzaCards'
import "./ListSection.css"
import { FaShoppingCart } from 'react-icons/fa';
import Menu from '../Menu/Menu';

function ListSection() {
    const [menuClicked, setMenuClicked] = useState("menuHidden");
    const [cart, setCart] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:6789/cart")
            .then(res => res.json())
            .then(cartData => {
                setCart(cartData)
                console.log(cart);
            })
        },
        []
    )

    function toggleMenu() {
        (menuClicked === "menuHidden") ? setMenuClicked("menuClicked") : setMenuClicked("menuHidden");
    }

    function clickMenu() {
        setMenuClicked("menuClicked");
    }

    return (
        <section id='listSection'>
            {(menuClicked === "menuClicked") && <Menu menuClicked={menuClicked} cart={cart} />}
            <button className='menuBtn' onClick={toggleMenu}><FaShoppingCart className='menuIcon'/></button>
            <PizzaCards clickMenu={clickMenu} setCart={setCart} />
            <img src="/images/pizzaicon_black.png" alt="Pizza Filter" className='pizzaFilter'/>
        </section>
    )
}

export default ListSection