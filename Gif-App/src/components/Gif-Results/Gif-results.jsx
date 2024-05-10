import React from 'react';

function GifResults({ gifs, isLoading, searchTerm, addToFavorites }) {
  return (
    <div className='gif-results'>
      {isLoading && <div className='loader' />}

      {!isLoading && gifs.length === 0 && searchTerm !== '' && (
        <div className='no-results'>No se encontraron GIFs para "{searchTerm}".</div>
      )}

      {!isLoading &&
        gifs.map((gif) => (
          <div key={gif.id} className='gif-item'>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button onClick={() => addToFavorites(gif)}>Agregar a favoritos</button>
          </div>
        ))}
    </div>
  );
}

export default GifResults;
