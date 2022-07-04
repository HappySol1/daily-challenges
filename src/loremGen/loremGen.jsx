import React, { useState, useRef } from "react";
import { fishText } from 'fish-text/fish-text.js';

import './StylesLorem.css'

export default function () {
    let [state, setState] = useState({
        lengthlorem: 0,
        russianLeng: false
    })
    let tempLength = useRef(0)
    let tempIsRussian = useRef(false)

    return <div className="loremGenW">
        <section className='section-center'>
            <h3>Lorem generator</h3>
            <div className="length">
                <label htmlFor='amount'>Length:</label>
                <input type='number' name='amount' id='amount' onChange={(e) => tempLength.current = e.target.value} />
                <label htmlFor='amount'>(words)</label>
            </div>
            <div className="language">

                <input type="checkbox" id="checkbox" className="switch__checkbox" onChange={() => tempIsRussian.current = !tempIsRussian.current} />
                <label className="switch__label" htmlFor="checkbox">
                    <span>ENG</span>
                    <span>RUS</span>
                </label>
            </div>
            <button className='btn' onClick={() => {
                setState({
                    lengthlorem: tempLength.current,
                    russianLeng: tempIsRussian.current
                })
            }}>generate</button>
            <article className='lorem-text'>
                {state.lengthlorem > 0 && fishText.getWords({ count: state.lengthlorem, lang: state.russianLeng ? 'rus' : 'eng' })}
            </article>
        </section>
    </div>
}