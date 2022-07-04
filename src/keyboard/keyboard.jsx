import React, { useEffect, useRef, useState } from 'react'
import './stylesKeyboard.css'

export default function Day4() {
    let myKeyboard = useRef()
    let currKey = useRef()
    useEffect(() => {
        document.addEventListener('keydown', keydownEvent)
        NewRandomLet()
    }, [])

    function keydownEvent(event) {
        if (event.key.toUpperCase() == currKey.dataset.key) {
            NewRandomLet()
        }
    }

    function NewRandomLet() {
        let r = Math.floor(Math.random() * 53 + 1)
        let e
        if (r < 15) {
            e = myKeyboard.current.children[1].children[r - 1]
        } else if (r > 14 && r < 29) {
            e = myKeyboard.current.children[2].children[r - 14 - 1]
        } else if (r > 28 && r < 42) {
            e = myKeyboard.current.children[3].children[r - 28 - 1]
        } else if (r >= 42) {
            e = myKeyboard.current.children[4].children[r - 41 - 1]
        }
        e.classList.value += ' jiggle'
        if (currKey.classList) {
            currKey.classList.value = currKey.classList.value.split(' ').filter((e) => {
                return e != 'jiggle'
            }).join(' ')
        }
        currKey = e
    }

    return <div className="keyboardW">
        <div ref={myKeyboard} onClick={(e) => console.log(e.target.dataset.key)} className="keyboard" >
            <h1>Тренировка слепой печати</h1>
            <div className="row">
                <button className="key" data-key="`">`</button>
                <button className="key" data-key="1">1</button>
                <button className="key" data-key="2">2</button>
                <button className="key" data-key="3">3</button>
                <button className="key" data-key="4">4</button>
                <button className="key" data-key="5">5</button>
                <button className="key" data-key="6">6</button>
                <button className="key" data-key="7">7</button>
                <button className="key" data-key="8">8</button>
                <button className="key" data-key="9">9</button>
                <button className="key" data-key="0">0</button>
                <button className="key" data-key="-">-</button>
                <button className="key" data-key="=">=</button>
                <button className="key" data-key="BACKSPACE">DEL</button>
            </div>
            <div className="row">
                <button className="key utility" data-key="TAB">Tab</button>
                <button className="key" data-key="Q">Q</button>
                <button className="key" data-key="W">W</button>
                <button className="key" data-key="E">E</button>
                <button className="key" data-key="R">R</button>
                <button className="key" data-key="T">T</button>
                <button className="key" data-key="Y">Y</button>
                <button className="key" data-key="U">U</button>
                <button className="key" data-key="I">I</button>
                <button className="key" data-key="O">O</button>
                <button className="key" data-key="P">P</button>
                <button className="key" data-key="[">[</button>
                <button className="key" data-key="]">]</button>
                <button className="key" data-key="\">\</button>
            </div>
            <div className="row">
                <button className="key utility" data-key="CAPSLOCK">CAPS</button>
                <button className="key" data-key="A">A</button>
                <button className="key" data-key="S">S</button>
                <button className="key" data-key="D">D</button>
                <button className="key" data-key="F">F</button>
                <button className="key" data-key="G">G</button>
                <button className="key" data-key="H">H</button>
                <button className="key" data-key="J">J</button>
                <button className="key" data-key="K">K</button>
                <button className="key" data-key="L">L</button>
                <button className="key" data-key=";">;</button>
                <button className="key" data-key="'">'</button>
                <button className="key utility" data-key="ENTER">ENTER</button>
            </div>
            <div className="row">
                <button className="key utility" data-key="SHIFT">SHIFT</button>
                <button className="key" data-key="Z">Z</button>
                <button className="key" data-key="X">X</button>
                <button className="key" data-key="C">C</button>
                <button className="key" data-key="V">V</button>
                <button className="key" data-key="B">B</button>
                <button className="key" data-key="N">N</button>
                <button className="key" data-key="M">M</button>
                <button className="key" data-key=",">,</button>
                <button className="key" data-key=".">.</button>
                <button className="key" data-key="/">/</button>
                <button className="key utility" data-key="SHIFT">SHIFT</button>
            </div>
        </div>
    </div>
}