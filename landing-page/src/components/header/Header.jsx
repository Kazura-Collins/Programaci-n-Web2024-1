import React from 'react'
import './header.css'

export function Header () {
  const items = [
    {
      id: crypto.randomUUID(),
      text: 'Simple objection',
      options: null,
      path: '/'
    },
    {
      id: crypto.randomUUID(),
      text: 'Objection Maker',
      options: null,
      path: '/MakerPage'
    },
    {
      id: crypto.randomUUID(),
      text: 'Courtroom',
      options: null,
      path: '/CourtPage'
    }
  ]

  return (
    <div className='header'>
      <p>Objection.lol</p>
      <input type='checkbox' id='menu-toggle' className='menu-toggle' />
      <label htmlFor='menu-toggle' className='menu-icon'>&#9776;</label> {/* Burger menu icon */}
      <ul className='menu'>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
