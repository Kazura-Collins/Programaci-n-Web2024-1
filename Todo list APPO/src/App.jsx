import React, { useState } from 'react'
import { Header, Footer } from './components'
import { Body } from './components/body/Body'
import assasinBakcgroundMusic from './assets/background_music.mp3'

export function App () {
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [tasks, setTasks] = useState([])

  // Función para agregar una tarea a la lista de tareas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const toggleMusic = () => {
    setMusicEnabled((prevState) => !prevState)
  }

  return (
    <>
      {musicEnabled && <audio src={assasinBakcgroundMusic} autoPlay loop />}
      <Header onAddTask={addTask} />
      <Body tasks={tasks} toggleMusic={toggleMusic} />
      <Footer />
    </>
  )
}
