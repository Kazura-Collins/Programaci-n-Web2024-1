import React from 'react'

function GifResults ({ gifs, isLoading, searchTerm }) {
  return (
    <div className='gif-results'>
      {isLoading && <div className='loader' />}

      {!isLoading && gifs.length === 0 && searchTerm !== '' && (
        <div className='no-results'>No se encontraron GIFs para "{searchTerm}".</div>
      )}

      {!isLoading &&
        gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
    </div>
  )
}

export default GifResults
