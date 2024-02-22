import React, { useState } from 'react'
import { Header, Footer } from './components'
import { Body } from './components/body/Body'
import pirateBackgroundMusic from './assets/background_music.mp3'

export function App () {
  const [musicEnabled, setMusicEnabled] = useState(true)

  const toggleMusic = () => {
    setMusicEnabled(prevState => !prevState)
  }

  return (
    <>
      {musicEnabled && <audio src={pirateBackgroundMusic} autoPlay loop />}
      <Header />
      <Body toggleMusic={toggleMusic} />
      <Footer />
    </>
  )
}
