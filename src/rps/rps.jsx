import React, { useEffect, useRef, useState } from 'react'
import './stylesRSP.css'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissors from './images/scissors.png'

export default function Day12() {
    let [choice, setChoice] = useState()
    const gameRules = {
        "Rock": {
            "Rock": 0,
            "Scissors": 1,
            "Paper": -1,
        },
        "Scissors": {
            "Rock": -1,
            "Scissors": 0,
            "Paper": 1,
        },
        "Paper": {
            "Rock": 1,
            "Scissors": -1,
            "Paper": 0,
        }
    }

    function getRandom() {
        switch (Math.floor(Math.random() * 3 + 1)) {
            case 1:
                return "Rock"
            case 2:
                return "Scissors"
            case 3:
                return "Paper"
        }
    }

    let param

    if (choice) {
        let comp = getRandom()
        param = {
            'yourchice': choice,
            'compchice': comp,
            'rezult': gameRules[choice][comp]

        }
    }





    return <div className="rpsW">
        {!choice ? <Wrapper setChoice={setChoice} /> : <Winner param={param} setChoice={setChoice} />}
    </div>
}

function Winner({ param, setChoice }) {
    function addWinerClass(e) {
        switch (e) {
            case 1:
                return 'you-win'
            case -1:
                return "computer-wins"
            case 0:
                return 'draw'
        }
    }
    function addImg(e) {
        switch (e) {
            case 'Rock':
                return rock
            case 'Scissors':
                return scissors
            case 'Paper':
                return paper
        }
    }
    return <div className={addWinerClass(param.rezult) + ' winner'}>
        <div className="topwrap">
            <div className="wrapper ">
                <h1 className='draw'>draw</h1>
                <div className="your-pick">
                    <h1 className="you-win">you win</h1>
                    <img src={addImg(param.yourchice)} alt="Rock" />
                </div>
                <div className="computer-pick">
                    <h1 className="computer-wins">computer wins</h1>
                    <img src={addImg(param.compchice)} alt="Scissors" />
                </div>
                <button className="play-again" onClick={() => setChoice('')}>
                    play again?
                </button>
            </div>
        </div>
    </div>
}

function Wrapper({ setChoice }) {
    let rpshendler = (e) => {
        setChoice(e.target.getAttribute("data-rps"))
    }

    return <div className="topwrap">
        <div className="wrapper">
            <h1>pick one</h1>
            <ul>
                <li className="pick-one" onClick={rpshendler} data-rps='Rock'>
                    <img src={rock} alt="Rock" data-rps='Rock' />
                    rock
                </li>
                <li className="pick-one" onClick={rpshendler} data-rps='Paper'>
                    <img src={paper} alt="Paper" data-rps='Paper' />
                    paper
                </li>
                <li className="pick-one" onClick={rpshendler} data-rps='Scissors'>
                    <img src={scissors} alt="Scissors" data-rps='Scissors' />
                    scissors
                </li>
            </ul>
        </div>
    </div>
}