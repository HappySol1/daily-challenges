import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = '#' + hexColor
  useEffect(() => {
    const timout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timout)
  }, [alert])
  function copyColor() {
    // console.log(13);
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }
  return <article className={(index > 10 ? 'color-light' : '') + ' color'} style={{ backgroundColor: `rgb(${bcg})` }} onClick={copyColor}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alert ? <p className='alert'>Copied</p> : null}
  </article>
}

export default SingleColor
