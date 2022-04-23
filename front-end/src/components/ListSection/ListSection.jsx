import React, { useState, useEffect } from 'react'
import PizzaCards from '../PizzaCards/PizzaCards'
import "./ListSection.css"
import { FaShoppingCart } from 'react-icons/fa';
import Menu from '../Menu/Menu';
import LoginPopup from '../LoginPopup/LoginPopup';

function ListSection() {
    const [menuClicked, setMenuClicked] = useState("menuHidden");
    const [cart, setCart] = useState([]);
    const [login, setLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(
        () => {
            fetch("http://localhost:6789/cart")
            .then(res => res.json())
            .then(cartData => {
                setCart(cartData)
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

    function loginAttempt() {
        if (login) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }

    return (
        <section id='listSection'>
            {(menuClicked === "menuClicked") && <Menu menuClicked={menuClicked} cart={cart} />}
            <button className='menuBtn' onClick={toggleMenu}><FaShoppingCart className='menuIcon'/></button>
            <PizzaCards clickMenu={clickMenu} setCart={setCart} />
            <img src="/images/pizzaicon_black.png" alt="Pizza Filter" className='pizzaFilter' onClick={loginAttempt} />
            {login && <LoginPopup setLogin={setLogin} setLoggedIn={setLoggedIn} />}
            {loggedIn && <div>Yuhuhuuhuhu</div> }
        </section>
    )
}

export default ListSection