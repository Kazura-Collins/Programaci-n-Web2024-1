import React, { useState, useEffect } from 'react'
import { Header, Footer, Adding } from './components'
import { Body } from './components/body/Body'
import assasinBakcgroundMusic from './assets/background_music.mp3'

export function App () {
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [currentList, setCurrentList] = useState('pending')

  // Función para agregar una tarea a la lista de tareas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  // Función para borrar todas las tareas
  const clearAllTasks = () => {
    setTasks([])
    setCompletedTasks([])
  }

  // Función para borrar una tarea específica
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setCompletedTasks(completedTasks.filter(task => task.id !== id))
  }

  // Función para marcar una tarea como completada
  const markTaskAsCompleted = (id) => {
    const completedTask = tasks.find(task => task.id === id)
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Función para marcar una tarea como no completada
  const markTaskAsUnCompleted = (id) => {
    const uncompletedTask = completedTasks.find(task => task.id === id)
    setTasks([...tasks, uncompletedTask])
    setCompletedTasks(completedTasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    console.log('Tareas completadas:', completedTasks)
  }, [completedTasks])

  const toggleMusic = () => {
    setMusicEnabled((prevState) => !prevState)
  }

  const toggleList = () => {
    setCurrentList(currentList === 'pending' ? 'completed' : 'pending') // Cambia entre 'pending' y 'completed'
  }

  return (
    <>
      {musicEnabled && <audio src={assasinBakcgroundMusic} autoPlay loop />}
      <Header />
      <Adding onAddTask={addTask} toggleList={toggleList} />
      <Body
        tasks={tasks}
        completedTasks={completedTasks}
        toggleMusic={toggleMusic}
        clearAllTasks={clearAllTasks}
        deleteTask={deleteTask}
        markTaskAsCompleted={markTaskAsCompleted}
        markTaskAsUnCompleted={markTaskAsUnCompleted}
        currentList={currentList}
      />
      <Footer />
    </>
  )
}
