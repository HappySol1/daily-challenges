import React, { useEffect, useRef, useState } from 'react'
import './stylesSlider.css'

export default function Day6() {
    let [price, setPrice] = useState(50)
    let range = useRef()
    function rangeHandler() {
        console.log(range.current.value)
        if (range.current.value > 7300 && range.current.value < 7700) {
            setPrice(75)
            range.current.value = 7500
        }
        else if (range.current.value > 4800 && range.current.value < 5200) {
            setPrice(50)
            range.current.value = 5000
        }
        else if (range.current.value > 2300 && range.current.value < 2700) {
            setPrice(25)
            range.current.value = 2500
        } else {
            setPrice(range.current.value / 100)
        }
    }
    return <div className="sliderW">
        <div className="wrapper">
            <div className="amount">
                <sup>$</sup>
                <span className="dollars">{price}</span>
            </div>
            <div className="inputWrap">
                <input type="range" ref={range} onChange={() => rangeHandler()} id="priceRange" min="0" max="10000" step="1" defaultValue="5000" />
                <div className="marks">
                    <div className="singleMark" style={{ left: '75%' }}></div>
                    <div className="singleMark" style={{ left: '50%' }}></div>
                    <div className="singleMark" style={{ left: '25%' }}></div>
                </div>
            </div>
            <br />
            <button>Buy Now</button>
        </div>
    </div>
}