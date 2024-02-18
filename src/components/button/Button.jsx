import React from 'react'
import './button.css'
import buttonClickSound from '../../assets/Coin.mp3'

const Button = ({ handleClick, text }) => {
  const handleClickWithSound = () => {
    const audio = new window.Audio(buttonClickSound)
    audio.play()
    handleClick()
  }

  return (
    <button className='button' onClick={handleClickWithSound}>
      {text}
    </button>
  )
}

export default Button
