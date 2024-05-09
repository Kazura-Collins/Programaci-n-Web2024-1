import React from 'react'

function GifFavoriteButton ({ isFavorite, toggleFavorite }) {
  return (
    <button onClick={toggleFavorite} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  )
}

export default GifFavoriteButton
