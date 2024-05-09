import React from 'react'

function GifFavorites ({ favorites }) {
  return (
    <div className='gif-favorites'>
      {favorites.length === 0
        ? (
          <p>No tienes GIFs favoritos.</p>
          )
        : (
            favorites.map((gif) => (
              <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))
          )}
    </div>
  )
}

export default GifFavorites
