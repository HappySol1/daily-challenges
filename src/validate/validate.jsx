import React, { useEffect, useRef, useState } from 'react'
import './stylesValidate.css'

export default function Day10() {
    let clearcode = {
        first: '',
        sec: '',
        third: '',
        forth: ''
    }
    let [code, setCode] = useState(clearcode)
    let firstInp = useRef()
    let secInp = useRef()
    let thirdInp = useRef()
    let forthInp = useRef()
    let clearInp = () => {
        setCode(clearcode)
        firstInp.current.focus()
    }
    let inphandler = (e) => {
        if (e.target.value.length == 4 && !isNaN(e.target.value)) {
            console.log(e.target.value)
            setCode({
                first: e.target.value[0],
                sec: e.target.value[1],
                third: e.target.value[2],
                forth: e.target.value[3]
            })
            firstInp.current.blur()
        }
        if (e.target.value.length == 1 && !isNaN(e.target.value)) {
            switch (e.target.name) {
                case 'verification_1':
                    setCode({ ...code, first: e.target.value })
                    secInp.current.focus()
                    break;
                case 'verification_2':
                    setCode({ ...code, sec: e.target.value })
                    thirdInp.current.focus()
                    break;
                case 'verification_3':
                    setCode({ ...code, third: e.target.value })
                    forthInp.current.focus()
                    break;
                case 'verification_4':
                    setCode({ ...code, forth: e.target.value })
                    forthInp.current.blur()
                    break;
            }
        }
    }

    return <div className="validatorW">
        <div className="wrapper">
            <h1>Код авторизации</h1>
            <p>Можно использовать Ctrl + V с корректными значениями</p>
            <form>
                <div className="fields">
                    <input type="text" ref={firstInp} value={code.first} onChange={inphandler} onClick={clearInp} name="verification_1" />
                    <input type="text" ref={secInp} maxLength="1" value={code.sec} onChange={inphandler} onClick={clearInp} name="verification_2" />
                    <input type="text" ref={thirdInp} maxLength="1" value={code.third} onChange={inphandler} onClick={clearInp} name="verification_3" />
                    <input type="text" ref={forthInp} maxLength="1" value={code.forth} onChange={inphandler} onClick={clearInp} name="verification_4" />
                </div>
                <button type="button" onClick={() => console.log('' + code.first + code.sec + code.third + code.forth)}>Verify</button>
            </form>
        </div>
    </div>
}
