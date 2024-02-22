import React, { useState, useEffect } from 'react'
import Button from '../button/Button'
import './body.css'

export function Body ({ toggleMusic }) {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (count < 0) {
      setMessage('¡No puede ser grumete! ¡¿Hemos perdido monedas?!') // Show the message when the count is negative
    } else {
      setMessage('') // Clear the message when the count is positive
    }
  }, [count])

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='container'>
      <h1>Arr!!</h1>
      <p id='description'>¡Contemos cuántos doblones de oro había en el último tesoro!</p>
      <h2>Contador: {count}</h2>
      {message && <p className='message'>{message}</p>}
      <Button handleClick={decrement} text='Restar' style='decrement-button' />
      <Button handleClick={increment} text='Agregar' style='increment-button' />
      <Button handleClick={toggleMusic} text='Activa la música!' style='music-button' />
    </div>
  )
}
