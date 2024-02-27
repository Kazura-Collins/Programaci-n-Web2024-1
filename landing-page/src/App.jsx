import React, { useState } from 'react'
import { Header, Main, Footer, Characters } from './components'

export function App () {
  const characterIcons = [
    'https://objection.lol/Images/Characters/1/icon.png',
    'https://objection.lol/Images/Characters/2/icon.png',
    'https://objection.lol/Images/Characters/3/icon.png',
    'https://objection.lol/Images/Characters/4/icon.png',
    'https://objection.lol/Images/Characters/5/icon.png',
    'https://objection.lol/Images/Characters/6/icon.png',
    'https://objection.lol/Images/Characters/7/icon.png',
    'https://objection.lol/Images/Characters/8/icon.png',
    'https://objection.lol/Images/Characters/9/icon.png',
    'https://objection.lol/Images/Characters/10/icon.png',
    'https://objection.lol/Images/Characters/11/icon.png',
    'https://objection.lol/Images/Characters/12/icon.png'
  ]

  const [selectedIcon, setSelectedIcon] = useState(null)

  const tableStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 70px)',
    gap: '2px',
    justifyContent: 'center',
    margin: '20px'
  }

  const handleIconClick = (index) => {
    setSelectedIcon(index)
  }

  return (
    <>
      <Header />
      <Main />
      <div style={tableStyle}>
        {characterIcons.map((icon, index) => (
          <Characters
            key={index}
            icon={icon}
            isHighlighted={selectedIcon === index}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}
