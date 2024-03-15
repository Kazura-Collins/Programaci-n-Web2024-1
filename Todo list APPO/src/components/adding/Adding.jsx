// adding.jsx
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './adding.css'

export function Adding ({ onAddTask, toggleList }) {
  const [task, setTask] = useState('')

  // Función para manejar el cambio en el input de la tarea
  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  // Función para manejar la adición de la tarea
  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: uuidv4(), // Generamos un UUID único para la tarea
        title: task,
        completed: false // Inicialmente la tarea no está completada
      }
      console.log('Nueva tarea añadida:', newTask)
      onAddTask(newTask) // Llamar a la función del padre para agregar la tarea
      setTask('')
    }
  }

  // Función para manejar la adición de la tarea al presionar Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className='adding-container'>
      <div className='task-input'>
        <input
          type='text'
          placeholder='Escribe tus objetivos'
          value={task}
          onChange={handleTaskChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Agregar</button>
        <button onClick={() => toggleList('pending')}>Pendientes</button>
        <button onClick={() => toggleList('completed')}>Completadas</button>
        <button onClick={() => toggleList('all')}>Todas</button>
      </div>
    </div>
  )
}
