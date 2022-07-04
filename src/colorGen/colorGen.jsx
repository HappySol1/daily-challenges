import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import './stylesColorGen.css'

export default function ColorGen() {
  const [color, secColor] = useState('')
  const [error, secError] = useState(false)
  const [list, secList] = useState(new Values('#f15025').all(10))

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      console.log(colors);
      secList(colors)
      secError(false)
    } catch (err) {
      secError(true)
    }
  }

  return <div className="colorGenW">
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={submitHandler}>
        <input type="text" value={color} placeholder="#f15025" className={error ? 'error' : ''} onChange={(e) => secColor(e.target.value)} />
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, i) => {
        return <SingleColor key={i} {...color} hexColor={color.hex} index={i} />
      })}
    </section>
  </div>
}
