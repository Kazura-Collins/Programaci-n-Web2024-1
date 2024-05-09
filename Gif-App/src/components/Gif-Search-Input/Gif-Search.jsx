import React from 'react'

function GifSearchInput ({ searchTerm, onChange, onKeyDown, onSearch, isLoading }) {
  return (
    <div className='gif-search-input'>
      <input
        type='text'
        placeholder='Buscar GIFs...'
        value={searchTerm}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSearch} disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </button>
    </div>
  )
}

export default GifSearchInput
