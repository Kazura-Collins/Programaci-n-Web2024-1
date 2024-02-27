import React from 'react'
import './Body.css'

export function Main () {
  return (
    <>
      <div className='container'>
        <h1>Objection!</h1>
        <p id='description'>Select your character and pose, submit your objection then surprise your friends with your irrefutable evidence!</p>
      </div>
      <div id='textbox' className='input-container'>
        {}
        <input
          type='text'
          className='input-text'
          placeholder='Enter your objection'
        />
        {}
        <button className='button'>Submit</button>
      </div>
    </>
  )
}
