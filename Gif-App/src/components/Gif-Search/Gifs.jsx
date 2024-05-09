import React, { useState } from 'react'
import debounce from 'just-debounce-it'
import GifSearchInput from '../Gif-Search-Input/Gif-Search'
import GifResults from '../Gif-Results/Gif-results'
import './Gifs.css'

const GIPHY_API_KEY = 'VIpOMm86iXXVb9LVMrewvr0CN8jGcD4p'

function GifSearch () {
  const [searchTerm, setSearchTerm] = useState('')
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchGifs = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=`
      )
      const data = await response.json()
      setGifs(data.data)
    } catch (error) {
      console.error('Error buscando GIFs:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedSearch = debounce(searchGifs, 500)

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    debouncedSearch()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchGifs()
    }
  }

  return (
    <div className='gif-search'>
      <GifSearchInput
        searchTerm={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onSearch={searchGifs}
        isLoading={isLoading}
      />
      <GifResults gifs={gifs} isLoading={isLoading} searchTerm={searchTerm} />
    </div>
  )
}

export default GifSearch
