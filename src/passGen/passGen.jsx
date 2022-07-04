import React, { useRef, useState, useEffect } from "react";

import './stylesPass.css'

export default function () {
    let [state, setState] = useState({
        pass: '',
        pasLength: 15,
        incLowr: true,
        incUp: true,
        incNumb: false,
        incSymb: false
    })
    let [copied, setCopied] = useState(false)
    let [emptyError, setEmptyError] = useState(false)

    let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\)=&';
    let upercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';
    let lowercaseStr = 'abcdefghijklmnopqrstuvwxyzhgsfd';
    let numbersStr = '0123456789635694378265487';

    function generateNewPass() {
        let currPull = ''
        let temparr = []
        if (!state.incLowr && !state.incUp && !state.incNumb && !state.incSymb) {
            setEmptyError(true)
            setState({ ...state, pass: '' })
        } else {
            if (state.incLowr) {
                currPull = currPull + lowercaseStr
            }
            if (state.incUp) {
                currPull = currPull + upercaseStr
            }
            if (state.incNumb) {
                currPull = currPull + numbersStr
            }
            if (state.incSymb) {
                currPull = currPull + symbolstr
            }

            for (let i = 0; i < state.pasLength; i++) {
                temparr.push(currPull[Math.floor(Math.random() * currPull.length)])
            }
            setEmptyError(false)
            setState({ ...state, pass: temparr.join('') })
        }

    }

    function copyPass() {
        if (state.pass.length > 0) {
            setCopied(true)
            navigator.clipboard.writeText(state.pass)
        }
    }

    useEffect(() => {
        const timout = setTimeout(() => {
            setCopied(false)
        }, 2000)
        return () => clearTimeout(timout)
    }, [copied])

    return <div className="passGenW">
        <div className="wrapper">

            <div className={(emptyError ? 'emptyError ' : '') + "field"}>
                <p>Pick at list one option</p>
                <input type="text" name="password" id="password" min="6" max="32" steps="1" value={state.pass} readOnly />

                {/* <!-- 👇🏻 Add a className of "copied" when the user clicks this button 👇🏻 --> */}
                <button className={(copied ? "copied" : '') + " copy"} onClick={copyPass}>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z" />
                        <path
                            d="M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z" />
                    </svg>
                    <span>Copied!</span>
                </button>
            </div>

            <div className="field">
                <input type="range" name="length" id="length" value={state.pasLength} min="6" max="32" onChange={(e) => setState({ ...state, pasLength: e.target.value })} />
                <span id="lengthText">{state.pasLength} characters</span>
            </div>

            <div className="field">
                <input type="checkbox" name="lowercase" id="lowercase" checked={state.incLowr} onChange={() => setState({ ...state, incLowr: !state.incLowr })} />
                <label htmlFor="lowercase"><strong>Include Lowercase Characters</strong> (abcd)</label>
            </div>

            <div className="field">
                <input type="checkbox" name="uppercase" id="uppercase" checked={state.incUp} onChange={() => setState({ ...state, incUp: !state.incUp })} />
                <label htmlFor="uppercase"><strong>Include Uppercase Characters</strong> (ABCD)</label>
            </div>

            <div className="field">
                <input type="checkbox" name="numbers" id="numbers" checked={state.incNumb} onChange={() => setState({ ...state, incNumb: !state.incNumb })} />
                <label htmlFor="numbers"><strong>Include Numbers</strong> (1234)</label>
            </div>

            <div className="field">
                <input type="checkbox" name="symbols" id="symbols" checked={state.incSymb} onChange={() => setState({ ...state, incSymb: !state.incSymb })} />
                <label htmlFor="symbols"><strong>Include Symbols</strong> (@#$%)</label>
            </div>
            <button className="generate" onClick={generateNewPass}>Generate</button>
        </div>
    </div>
}