import React from 'react'
import Button from '../button/Button'
import './body.css'

export function Body ({ toggleMusic, tasks }) {
  return (
    <div className='container'>
      <h1>¡Planifica tus ataques!</h1>
      <p id='description'>Escribe el nombre de tus próximas víctimas y si ya has acabado con ellas</p>

      {/* Lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <Button handleClick={toggleMusic} text='Activa la música' style='music-button' />
    </div>
  )
}
