import React, { useEffect, useRef, useState } from 'react'
import './stylescalculator.css'

export default function Day7() {
    let [calcValues, setCalcValues] = useState({
        people: 1,
        bill: 100
    })
    let regexp = /^\d+$/;
    console.log(calcValues.people)
    function setNewWal() {
        setCalcValues({ ...calcValues, people: 2 })
    }
    return <div className="calculatorW">
        <div className="wrapper">

            <div className="tip-amount">
                <div className="label">Tip Amount</div>
                <div className="dollars"><sup>$</sup><span id="tip-amount">15.30</span></div>
            </div>
            <div className="total-per-person">
                <div className="label">Total Per Person</div>
                <div className="dollars"><sup>$</sup><span id="total-per-person">39.11</span></div>
            </div>

            <div className="input-fields">
                <div className="bill-amount">
                    <div className="field">
                        <input type="text" id="bill-amount" name="bill-amount" value={calcValues.bill} onChange={(e) => console.log(regexp.test(e.target.value))} />
                    </div>
                    <div className="label">Bill Amount</div>
                </div>
                <div className="number-of-people">
                    <div className="field">
                        <input type="text" id="number-of-people" name="number-of-people" value={calcValues.people} onChange={(e) => console.log(regexp.test(e.target.value))} />
                    </div>
                    <div className="label">Number of People</div>
                </div>
            </div>

            <div className="tip-percentages">
                <div>
                    <input type="radio" name="tip" onClick={() => setNewWal()} defaultValue="5%" id="five-percent" />
                    <label htmlFor="five-percent">
                        5%
                    </label>
                </div>
                <div>
                    <input type="radio" name="tip" defaultValue="10%" id="ten-percent" />
                    <label htmlFor="ten-percent">
                        10%
                    </label>
                </div>
                <div>
                    <input type="radio" name="tip" defaultValue="15%" id="fifteen-percent" />
                    <label htmlFor="fifteen-percent">
                        15%
                    </label>
                </div>
                <div>
                    <input type="radio" name="tip" defaultValue="20%" id="twenty-percent" />
                    <label htmlFor="twenty-percent">
                        20%
                    </label>
                </div>
            </div>
            <div className="button-wrapper">
                <button id="calculate">Calculate</button>
            </div>
        </div>
    </div>
}