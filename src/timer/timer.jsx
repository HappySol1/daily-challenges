import React, { useRef, useState } from "react";
import './stylesTimer.css'

export default function Day1() {
  let [secVal, setSecVal] = useState('00')
  let [MinVal, setMinVal] = useState('15')
  const [rerender, setRerender] = useState(false);
  let MinRef = useRef()
  let SecRef = useRef()
  let buttRef = useRef()
  let TimerOut = useRef(false)
  let isActive = useRef(false)
  let regexp = /^\d+$/;

  function MinHandler(e) {
    if (e.length <= 2 && (regexp.test(e) || e.length == 0)) {
      setMinVal(e)
      if (e.length == 2) SecRef.current.focus()
    }
  }
  function SecHandler(e) {
    if (e.length <= 2 && (regexp.test(e) || e.length == 0)) {
      setSecVal(e)
      if (e.length == 2) secBlur(e)
    }
  }
  function secBlur(e) {

    if (e.length == 1) {
      setSecVal('0' + e)
    }
    if (e.length == 0) {
      setSecVal('00')
    }
  }
  function minBlur(e) {

    if (e.length == 1) {
      setMinVal('0' + e)
    }
    if (e.length == 0) {
      setMinVal('00')
    }
  }
  let timerId = useRef()
  function activateTimer() {
    setRerender(!rerender);
    isActive.current = true
    TimerOut.current = false
    console.log('start')
    buttRef.current.innerHTML = 'stop'
    SecRef.current.disabled = 'disabled'
    MinRef.current.disabled = 'disabled'
    let remainTIme = +MinVal * 60 + +secVal

    timerId.current = setInterval(() => {
      if (remainTIme > 0) {
        remainTIme--
        if (MinVal != Math.floor(remainTIme / 60)) {
          if (Math.floor(remainTIme / 60) < 10) {
            setMinVal('0' + Math.floor(remainTIme / 60))
          } else {
            setMinVal(Math.floor(remainTIme / 60))
          }
        }
        if (remainTIme % 60 < 10) {
          setSecVal('0' + remainTIme % 60)
        } else {
          setSecVal(remainTIme % 60)
        }
      } else {
        TimerOut.current = true
        stopTimer()
        alert('end')
      }
      console.log(Math.floor(remainTIme / 60) + ' ' + remainTIme % 60)

    }, 1000);
  }
  function stopTimer() {
    setRerender(!rerender);
    console.log('stoped')
    isActive.current = false
    buttRef.current.innerHTML = 'start'
    SecRef.current.disabled = ''
    MinRef.current.disabled = ''
    clearInterval(timerId.current)
  }





  return <div className="timerW">
    <div className="wrapper">
      <div className={(isActive.current ? 'ending ' : null) + " ring"}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <div className="time">
          <div className="minutes">
            <input
              type="text"
              ref={MinRef}
              value={MinVal}
              onChange={e => MinHandler(e.target.value)}
              onBlur={(e) => minBlur(e.target.value)}
              disabled=''
            />
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input
              type="text"
              ref={SecRef}
              value={secVal}
              onChange={e => SecHandler(e.target.value)}
              onBlur={e => secBlur(e.target.value)}
              disabled=''
            />
          </div>
        </div>
        <button
          className="start"
          ref={buttRef}
          onClick={(e) => {
            isActive.current ? stopTimer() : activateTimer()
          }}
        >
          start
        </button>
      </div>
    </div>
  </div>
}