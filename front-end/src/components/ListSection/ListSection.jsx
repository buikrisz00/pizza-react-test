import React, { useState } from 'react'
import PizzaCards from '../PizzaCards/PizzaCards'
import "./ListSection.css"
import { FaShoppingCart } from 'react-icons/fa';
import Menu from '../Menu/Menu';

function ListSection() {
    const [menuClicked, setMenuClicked] = useState("menuHidden");

    function toggleMenu() {
        (menuClicked === "menuHidden") ? setMenuClicked("menuClicked") : setMenuClicked("menuHidden");
    }

    function clickMenu() {
        setMenuClicked("menuClicked");
    }

    return (
        <section id='listSection'>
            {(menuClicked === "menuClicked") && <Menu menuClicked={menuClicked}/>}
            <button className='menuBtn' onClick={toggleMenu}><FaShoppingCart className='menuIcon'/></button>
            <PizzaCards clickMenu={clickMenu} />
            <img src="/images/pizzaicon_black.png" alt="Pizza Filter" className='pizzaFilter'/>
        </section>
    )
}

export default ListSection