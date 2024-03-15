import React from 'react'
import Button from '../button/Button'
import './body.css'

export function Body ({
  toggleMusic,
  tasks,
  completedTasks,
  clearAllTasks,
  deleteTask,
  markTaskAsCompleted,
  markTaskAsUnCompleted,
  currentList
}) {
  const handleDelete = (id) => {
    deleteTask(id)
  }

  const handleDeleteAll = () => {
    clearAllTasks()
  }

  return (
    <div className='container'>
      {currentList === 'pending' && (
        <div>
          <h2>Tareas pendientes</h2>
          {tasks.length === 0
            ? (
              <p>No hay tareas pendientes.</p>
              )
            : (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <Button
                      type='delete'
                      onClick={() => handleDelete(task.id)}
                      text='Borrar'
                      style='deleteTask'
                    />
                    <Button
                      onClick={() => markTaskAsCompleted(task.id)}
                      text='Completar'
                      style='completeTask'
                    />
                  </li>
                ))}
              </ul>
              )}
        </div>
      )}
      {currentList === 'completed' && (
        <div>
          <h2>Tareas completadas</h2>
          {completedTasks.length === 0
            ? (
              <p>No hay tareas completadas.</p>
              )
            : (
              <ul>
                {completedTasks.map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <Button
                      type='delete'
                      onClick={() => handleDelete(task.id)}
                      text='Borrar'
                      style='deleteTask'
                    />
                    <Button
                      onClick={() => markTaskAsUnCompleted(task.id)}
                      text='No se ha completado'
                      style='completeTask'
                    />
                  </li>
                ))}
              </ul>
              )}
        </div>
      )}
      {currentList === 'all' && (
        <div>
          <h2>Todas las tareas</h2>
          {tasks.length === 0 && completedTasks.length === 0
            ? (
              <p>No hay tareas de ningún tipo.</p>
              )
            : (
              <ul>
                {[...tasks, ...completedTasks].map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <Button
                      type='delete'
                      onClick={() => handleDelete(task.id)}
                      text='Borrar'
                      style='deleteTask'
                    />
                  </li>
                ))}
              </ul>
              )}
        </div>
      )}
      <Button
        type='deleteAll'
        onClick={handleDeleteAll}
        text='Borrar todas las tareas'
        style='deleteTask'
      />
      <Button handleClick={toggleMusic} text='♪' style='music-button' />
    </div>
  )
}
