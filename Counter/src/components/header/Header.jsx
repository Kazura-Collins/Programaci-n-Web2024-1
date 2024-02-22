import React from 'react'
import './header.css'

export function Header () {
  const links = [
    {
      text: 'Mi Canal de YouTube',
      url: 'https://www.youtube.com/@KazuraCollins'
    },
    {
      text: 'Mi GitHub',
      url: 'https://github.com/Kazura-Collins/Programacion-Web2024-1'
    }
  ]

  return (
    <div className='header-container'> {/* Aplica la clase CSS 'header-container' */}
      <img src='https://images.vexels.com/media/users/3/189708/isolated/preview/f0add49e1fe7b06c201d2b6df808334e-drawn-pirate-skull.png' alt='' className='logo' /> {/* Logo */}
      <ul className='header-list'> {/* Aplica la clase CSS 'header-list' */}
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
