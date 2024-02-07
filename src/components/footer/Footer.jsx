import React from 'react'

export function Footer () {
  const divStyle = {
    display: 'flex',
    backgroundColor: '#1a999f',
    padding: '1vh 2vh',
    fontSize: 'small',
    width: '99vw',
    justifyContent:'center'
  }

  return (
    <div style={divStyle}>
      <p>© 2024 Kazura Collins - Capcom - All rights reserved</p>
    </div>
  )
}