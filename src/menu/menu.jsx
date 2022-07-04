import React, { useState } from "react";

import './stylesMenu.css'

export default function Day2() {
    const menuItems = [
        {
            name: 'French Fries with Ketchup',
            price: 223,
            image: 'plate__french-fries.png',
            alt: 'French Fries',
            id: 1
        },
        {
            name: 'Salmon and Vegetables',
            price: 512,
            image: 'plate__salmon-vegetables.png',
            alt: 'Salmon and Vegetables',
            id: 2
        },
        {
            name: 'Spaghetti Meat Sauce',
            price: 782,
            image: 'plate__spaghetti-meat-sauce.png',
            alt: 'Spaghetti with Meat Sauce',
            id: 3
        },
        {
            name: 'Bacon, Eggs, and Toast',
            price: 599,
            image: 'plate__bacon-eggs.png',
            alt: 'Bacon, Eggs, and Toast',
            id: 4
        },
        {
            name: 'Chicken Salad with Parmesan',
            price: 698,
            image: 'plate__chicken-salad.png',
            alt: 'Chicken Salad with Parmesan',
            id: 5
        },
        {
            name: 'Fish Sticks and Fries',
            price: 634,
            image: 'plate__fish-sticks-fries.png',
            alt: 'Fish Sticks and Fries',
            id: 6
        }
    ]
    const [selected, setSelected] = useState([])
    function addtoselected(e) {
        setSelected([...selected, { item: e, cnt: 1 }])
    }

    function removefromselected(e) {
        let delnumber = selected.indexOf(selected.find(i => i.item.id == e.id))
        let temparr = [...selected]
        temparr.splice(delnumber, 1)
        setSelected(temparr)
    }
    function cntHandler(item, cnt, direction) {

        if (cnt + direction > 0) {
            let delnumber = selected.indexOf(selected.find(i => i.item.id == item.id))
            let temparr = []
            for (let i = 0; i < selected.length; i++) {
                if (delnumber !== i) {
                    temparr.push(selected[i])
                } else {
                    temparr.push({ item: item, cnt: cnt + direction })
                }
            }
            setSelected(temparr)
        }
    }
    let selectedList = selected.map(({ item, cnt }) => {
        return <li key={item.id}>
            <div className="plate">
                <img src={`MenuImages/${item.image}`} alt={item.alt} className="plate" />
            </div>
            <div className="content">
                <p className="menu-item">{item.name}</p>
                <p className="price">{item.price}p</p>
            </div>
            <div className="delitem">
                <button onClick={() => removefromselected(item)}><img src="MenuImages/cross.svg" /></button>
            </div>
            <div className="quantity__wrapper">
                <button className="decrease" onClick={() => cntHandler(item, cnt, -1)}>
                    <img src="MenuImages/chevron.svg" />
                </button>
                <div className="quantity">{cnt}</div>
                <button className="increase" onClick={() => cntHandler(item, cnt, 1)} >
                    <img src="MenuImages/chevron.svg" />
                </button>
            </div>
            <div className="subtotal">
                {cnt * item.price}p
            </div>
        </li>
    })
    let munuList = menuItems.map((item) => {
        return <li key={item.id}>
            <div className="plate">
                <img src={`MenuImages/${item.image}`} alt={item.alt} className="plate" />
            </div>
            <div className="content">
                <p className="menu-item">{item.name}</p>
                <p className="price">{item.price}p</p>
                {selected.find(i => i.item.id == item.id) == undefined ?
                    <button className="add" onClick={() => addtoselected(item)}>Add to Cart</button>
                    :
                    <button className="in-cart" onClick={() => removefromselected(item)}>
                        <img src="MenuImages/check.svg" alt="Check" />
                        In Cart
                    </button>
                }
            </div>
        </li>
    })
    function Totalprice() {
        let acc = 0
        for (let i = 0; i < selected.length; i++) {
            acc += selected[i].cnt * selected[i].item.price
        }
        return acc
    }
    return <div className="menuW">
        <div className="wrapper menu">
            <div className="panel">
                <h1>Menu</h1>
                <ul className="menu">
                    {munuList}
                </ul>
            </div>

            <div className="panel cart">
                <h1>Cart</h1>
                {selected.length == 0 ?
                    <p className="empty">Your cart is empty.</p>
                    :
                    <>
                        <ul className="cart-summary">
                            {selectedList}
                        </ul>
                        <div className="totals">
                            <div className="line-item">
                                <div className="label">Итоговая цена:</div>
                                <div className="amount price subtotal"><Totalprice />p</div>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
        <script src="app.js"></script>
    </div>
}