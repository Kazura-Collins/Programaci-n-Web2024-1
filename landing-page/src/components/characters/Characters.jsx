import React from 'react'

export function Characters ({ icon, isHighlighted, onClick }) {
  const iconStyle = {
    filter: isHighlighted ? 'brightness(100%)' : 'brightness(70%)',
    cursor: 'pointer'
  }

  return (
    <img
      src={icon}
      style={iconStyle}
      onClick={onClick}
      alt='Character Icon'
    />
  )
}
