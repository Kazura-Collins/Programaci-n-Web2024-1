import React from 'react'
import { TaskContextProvider } from './context/TaskContextProvider'
import GifSearch from './components/Gif-Search/Gifs'

export default function App () {
  return (
    <TaskContextProvider>
      <AppContent />
    </TaskContextProvider>
  )
}

function AppContent () {
  console.log('Rendering AppContent...')
  return <GifSearch />
}
